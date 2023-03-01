import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { UsersEntity } from "src/user/user.entity";

@Table({ tableName: "checkin", modelName: "checkin" })
export class CheckInEntity extends Model {
  @Column({
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: DataType.INTEGER
  })
  id: number

  @Column({
    allowNull: false,
    type: DataType.STRING(25)
  })
  time: string

  @Column({
    allowNull: false,
    type: DataType.DATEONLY()
  })
  date: string

  @ForeignKey(() => UsersEntity)
  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  userfk: string
}