import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class Discipline extends Model {}

Discipline.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  school_period_id: DataTypes.INTEGER,
  academic_class_id: DataTypes.INTEGER,
  name: DataTypes.TEXT,
  code: DataTypes.STRING,
  shift: DataTypes.STRING,
  active: DataTypes.TINYINT,
  is_exceptional: DataTypes.TINYINT,
  integration: DataTypes.STRING,
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
  deleted_at: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'Discipline',
  tableName: 'disciplines',
  timestamps: false,
  paranoid: true,
  underscored: true,
});
