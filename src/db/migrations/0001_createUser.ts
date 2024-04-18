import { change } from '../dbScript';

change(async (db) => {
  await db.createTable('account_user', (t) => ({
    id: t.identity().primaryKey(),
    name: t.text(0, 1000)
  }));
});
