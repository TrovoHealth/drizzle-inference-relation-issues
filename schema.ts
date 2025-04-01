import { relations } from 'drizzle-orm';
import { pgTable, serial, text, integer, timestamp, PgColumnBuilder, PgColumnBuilderBase } from 'drizzle-orm/pg-core';

const createUserTable = <T extends Record<string, PgColumnBuilderBase>>(customColumns: T) => pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  ...customColumns,
});
export const users = createUserTable(
  {
    test: text('test').notNull(),
  }
);

export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id).notNull(),
  amount: integer('amount').notNull(),
  status: text('status').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});;

// Define relations for the orders table
export const ordersRelations = relations(orders, ({ one }) => ({
  user: one(users, {
    fields: [orders.userId],
    references: [users.id],
  }),
}));


