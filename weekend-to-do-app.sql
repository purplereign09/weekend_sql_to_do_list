CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
	"description" VARCHAR (300) NOT NULL,
  	"completed" BOOLEAN,
	"due" DATE
);

INSERT INTO "tasks" 
	("task", "description", "completed", "due") 

VALUES 
	('Laundry', 'Put in new load', NULL, '8-9-2021'),
	('Car', 'Get oil changed', NULL, '8-9-2021'),
	('Vacuum', 'Vacuum the hallway', NULL, '8-9-2021'),
	('Kitchen', 'Do the dishes', NULL, '8-8-2021'),
	('Fold', 'Fold clothes', NULL, '8-10-2021'),
	('Groceries', 'Buy grocieries', NULL, '8-8-2021');
	
	SELECT * FROM "tasks";