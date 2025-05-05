import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../connection/mysql.js';

export class SchoolPeriod extends Model {}

SchoolPeriod.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  school_period: DataTypes.STRING,
  start_date: DataTypes.DATE,
  final_date: DataTypes.DATE,
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
  deleted_at: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'SchoolPeriod',
  tableName: 'school_periods',
  timestamps: false,
  paranoid: true,
  underscored: true,
});
