set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "users" (
  "usersId" serial PRIMARY KEY,
  "username" text,
  "hashedPwd" varchar,
  "createdAt" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "progression" (
  "progressionId" serial PRIMARY KEY,
  "usersId" integer,
  "bestTime" integer,
  "helmetsId" integer,
  "shieldsId" integer,
  "level" integer
);

CREATE TABLE "helmets" (
  "helmetsId" serial PRIMARY KEY,
  "title" text,
  "description" text
);

CREATE TABLE "shields" (
  "shieldsId" serial PRIMARY KEY,
  "title" text,
  "description" text
);

ALTER TABLE "progression" ADD FOREIGN KEY ("helmetsId") REFERENCES "helmets" ("helmetsId");

ALTER TABLE "progression" ADD FOREIGN KEY ("shieldsId") REFERENCES "shields" ("shieldsId");

ALTER TABLE "progression" ADD FOREIGN KEY ("usersId") REFERENCES "users" ("usersId");
