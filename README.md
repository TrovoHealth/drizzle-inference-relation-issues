# Drizzle Inner Join Example

This project demonstrates how to use Drizzle ORM to perform inner joins between tables in a PostgreSQL database.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with your database connection string:
```
DATABASE_URL=postgres://username:password@localhost:5432/your_database
```

3. Create the database tables by running the migrations:
```bash
npx drizzle-kit generate:pg
```

## Running the Example

To run the example query:
```bash
npm start
```

This will execute a query that performs an inner join between the `users` and `orders` tables, showing all completed orders with their associated user information.