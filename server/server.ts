/* eslint-disable @typescript-eslint/no-unused-vars -- Remove when used */
import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import argon2 from 'argon2';
import {
  ClientError,
  defaultMiddleware,
  errorMiddleware,
} from './lib/index.js';

const connectionString =
  process.env.DATABASE_URL ||
  `postgresql://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`;
const db = new pg.Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/dist', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

app.get('/shieldKnight/users', async (req, res, next) => {
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

app.post('/shieldKnight/users/sign-up', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ClientError(400, 'username and password are required');
    }
    const sql = `
      insert into "users" ("username", "hashedPwd")
        values ($1, $2)
        returning *;
      `;
    const hashedPwd = await argon2.hash(password);
    const params = [username, hashedPwd];
    const result = await db.query(sql, params);
    const [row] = result.rows;
    res.status(201).json(row);
  } catch (err) {
    next(err);
  }
});

app.get('/shieldKnight/progression', async (req, res, next) => {
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

app.get('/shieldKnight/helmets', async (req, res, next) => {
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

app.get('/shieldKnight/shields', async (req, res, next) => {
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
app.use(defaultMiddleware(reactStaticDir));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
