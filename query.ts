import { db } from './db';
import { users, orders } from './schema';
import { eq } from 'drizzle-orm';

async function main() {
  // Example of an inner join query
  const userOrders = await db.query.orders.findMany({
    with: {
      user: {
          columns: {
              id: true,
              // This doesn't work
              test: true
          },
      },
    },
  });

  // This works
  users.test
}

main(); 