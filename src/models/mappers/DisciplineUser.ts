import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class DisciplineUser extends Model {}

DisciplineUser.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  discipline_id: DataTypes.INTEGER,
  user_id: DataTypes.INTEGER,
  team_id: DataTypes.INTEGER,
  temporary: DataTypes.TINYINT,
  professor: DataTypes.TINYINT,
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
  deleted_at: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'DisciplineUser',
  tableName: 'discipline_users',
  timestamps: false,
  paranoid: true,
  underscored: true,
});
