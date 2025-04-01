import { db } from './db';
import { users, orders } from './schema';
import { eq } from 'drizzle-orm';

async function main() {
  try {
    // Example of an inner join query
    const userOrders = await db.query.orders.findMany({
      where: eq(orders.status, 'completed'),
      with: {
        user: {
            columns: {
                id: true,

                // Type error, cant' infer custom types
                test: true
            },
        },
      },
    });

    console.log('User Orders:', userOrders);
  } catch (error) {
    console.error('Error executing query:', error);
  }

  users.test
}

main(); 