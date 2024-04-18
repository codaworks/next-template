import { change } from '../dbScript';

change(async (db) => {
  await db.createTable('account_user', (t) => ({
    ...t.defaults(),
    name: t.text(0, 1000)
  }));
});
