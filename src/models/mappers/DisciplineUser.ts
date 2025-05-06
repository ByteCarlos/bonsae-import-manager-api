import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../connection/mysql.js';

export class DisciplineUserSQL extends Model {}

DisciplineUserSQL.init({
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
  modelName: 'DisciplineUserSQL',
  tableName: 'discipline_users',
  timestamps: false,
  paranoid: true,
  underscored: true,
});
