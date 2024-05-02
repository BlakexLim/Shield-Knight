-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

-- EXAMPLE:

 insert into "users" ("username", "hashedPwd")
   values ('hotdog', 'bolognie');

 insert into "helmets" ("title", "description")
   values ('Champion', 'Helmet of champions.');

 insert into "shields" ("title", "description")
   values ('Steel', 'Steel sword.');

 insert into "progression" ("usersId", "bestTime", "helmetsId", "shieldsId", "level")
   values (1, 50, 1, 1, '001');
