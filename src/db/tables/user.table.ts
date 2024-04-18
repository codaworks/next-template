import { BaseTable } from '../baseTable';

export class UserTable extends BaseTable {
  readonly table = 'account_user';
  columns = this.setColumns((t) => ({
    ...t.defaults(),
    name: t.text(0, 1000)
  }));
}
