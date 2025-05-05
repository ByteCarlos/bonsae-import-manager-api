import { Sequelize } from 'sequelize';

const user = process.env.MYSQL_USER || '';
const password = process.env.MYSQL_PASSWORD || '';
const host = process.env.MYSQL_HOST || '';
const database = process.env.MYSQL_DATABASE || '';

export const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: 'mysql',
  logging: false,
  define: {
    timestamps: false,
    underscored: true
  }
});