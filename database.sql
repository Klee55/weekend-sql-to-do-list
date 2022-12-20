CREATE TABLE "tasks" (
	"id" serial primary key,
	"task" varchar(500) not null,
	"status" varchar(500) not null
	);
	
INSERT INTO "tasks" ("task", "status")
VALUES ('take out trash', 'Incomplete'), ('buy green onions', 'Incomplete'), ('do the laundry', 'Incomplete');


UPDATE "tasks" SET "status"='completed' WHERE "id"='10';