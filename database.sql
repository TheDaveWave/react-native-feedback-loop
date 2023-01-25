-- Create Tables

CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR(50) UNIQUE NOT NULL,
	"password" VARCHAR(75) UNIQUE NOT NULL,
	"admin" BOOLEAN NOT NULL DEFAULT 'false',
	"token" VARCHAR(5000),
	"token_date" DATE DEFAULT CURRENT_DATE,
	"token_expiration" DATE DEFAULT CURRENT_DATE + INTERVAL '1 day'
);

CREATE TABLE "feedback" (
	"id" SERIAL PRIMARY KEY,
	"user_id" BIGINT REFERENCES "users",
	"feeling" INT NOT NULL,
	"support" INT NOT NULL,
	"understanding" INT NOT NULL,
	"comment" VARCHAR(1500),
	"date" DATE DEFAULT CURRENT_DATE
);


-- SELECT Statements

SELECT * FROM "users";

SELECT * FROM "feedback" ORDER BY "date" DESC;

SELECT * FROM "feedback" WHERE "user_id"=1 ORDER BY "date" DESC, "id" DESC;
