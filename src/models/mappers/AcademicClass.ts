import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../connection/mysql.js';

export class AcademicClassSQL extends Model {}

AcademicClassSQL.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  school_period_id: DataTypes.INTEGER,
  name: DataTypes.TEXT,
  code: DataTypes.STRING,
  start_date: DataTypes.DATE,
  end_date: DataTypes.DATE,
  category: DataTypes.STRING,
  course: DataTypes.STRING,
  active: DataTypes.TINYINT,
  is_exceptional: DataTypes.TINYINT,
  period: DataTypes.STRING,
  campus_id: DataTypes.INTEGER.UNSIGNED,
  integration: DataTypes.STRING,
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
  deleted_at: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'AcademicClassSQL',
  tableName: 'academic_classes',
  timestamps: false,
  paranoid: true,
  underscored: true,
});
