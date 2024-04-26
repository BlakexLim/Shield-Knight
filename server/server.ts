/* eslint-disable @typescript-eslint/no-unused-vars -- Remove when used */
import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import {
  ClientError,
  defaultMiddleware,
  errorMiddleware,
} from './lib/index.js';

type Auth = {
  username: string;
  password: string;
};

const connectionString =
  process.env.DATABASE_URL ||
  `postgresql://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`;

const db = new pg.Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

const hashKey = process.env.TOKEN_SECRET;
if (!hashKey) throw new Error('TOKEN_SECRET not found in .env');

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/dist', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

app.get('/api/users', async (req, res, next) => {
  try {
    const sql = `
      select *
        from users;
        `;
    const result = await db.query(sql);
    const users = result.rows;
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

app.post('/api/sign-up', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ClientError(400, 'username and password are required fields');
    }
    const sql = `
      insert into "users" ("username", "hashedPwd")
        values ($1, $2)
        returning *;
        `;
    const params = [username, await argon2.hash(password)];
    const result = await db.query(sql, params);
    const [user] = result.rows;
    if (!user) throw new ClientError(404, `${username} not found`);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

app.post('/api/login', async (req, res, next) => {
  try {
    const { username, password } = req.body as Partial<Auth>;
    if (!username || !password) {
      throw new ClientError(400, 'invalid login');
    }
    const sql = `
      select "usersId", "hashedPwd"
        from "users"
        where "username" = $1;
        `;
    const params = [username];
    const result = await db.query(sql, params);
    const [user] = result.rows;
    if (!user) throw new ClientError(401, 'invalid login credentials');
    const verify = await argon2.verify(user.hashedPwd, password);
    if (!verify) throw new ClientError(401, 'invalid login credentials');
    const payload = { usersId: user.usersId, username };
    const token = jwt.sign(payload, hashKey);
    res.status(200).json({ user: payload, token });
  } catch (err) {
    next(err);
  }
});

app.get('/api/progression', async (req, res, next) => {
  try {
    const sql = `
      select *
        from progression;
        `;
    const result = await db.query(sql);
    const users = result.rows;
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

app.get('/api/helmets', async (req, res, next) => {
  try {
    const sql = `
      select *
        from helmets;
        `;
    const result = await db.query(sql);
    const users = result.rows;
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

app.get('/api/shields', async (req, res, next) => {
  try {
    const sql = `
      select *
        from shields;
        `;
    const result = await db.query(sql);
    const users = result.rows;
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

/*
 * Middleware that handles paths that aren't handled by static middleware
 * or API route handlers.
 * This must be the _last_ non-error middleware installed, after all the
 * get/post/put/etc. route handlers and just before errorMiddleware.
 */
// app.use(defaultMiddleware(reactStaticDir));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
