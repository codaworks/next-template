import { BaseTable } from '../baseTable';

export class UserTable extends BaseTable {
  readonly table = 'account_user';
  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),
    name: t.text(0, 1000),
  }));
}
