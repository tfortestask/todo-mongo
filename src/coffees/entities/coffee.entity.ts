import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'coffees' })
export class Coffee extends Model {
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  breand: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  flavors: string[];
}
