-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

-- EXAMPLE:

 insert into "users" ("username", "hashedPwd")
   values ('Bolognie', 'asdfasdfasdf');

 insert into "helmets" ("title", "description")
   values ('Champion', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta.');

 insert into "shields" ("title", "description")
   values ('Steel', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales.');

 insert into "progression" ("usersId", "bestTime", "helmetsId", "shieldsId", "level")
   values (1, 50, 1, 1, '001');
