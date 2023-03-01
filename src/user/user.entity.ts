import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { CheckInEntity } from "src/check-in/check-in.entity";

@Table({ tableName: "users", modelName: "users" })
export class UsersEntity extends Model {
  @Column({
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: DataType.INTEGER
  })
  id: number

  @Column({
    allowNull: false,
    type: DataType.STRING(40)
  })
  usercode: string

  @HasMany(() => CheckInEntity)
  checkin: CheckInEntity
}