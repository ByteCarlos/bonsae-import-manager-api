import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { SchoolPeriodEntity } from '../models/entities/SchoolPeriodEntity.js';
import { AcademicClassesEntity } from '../models/entities/AcademicClassesEntity.js';
import { CampusEntity } from '../models/entities/CampusEntity.js';
import { DisciplinesEntity } from '../models/entities/DisciplinesEntity.js';
import { UsersEntity } from '../models/entities/UsersEntity.js';
import { DisciplineUsersEntity } from '../models/entities/DisciplineUsersEntity.js';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.MYSQL_HOST || 'localhost',
    port: Number(process.env.MYSQL_PORT) || 3306,
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'bonsae.import.db',
    entities: [SchoolPeriodEntity, CampusEntity, AcademicClassesEntity, DisciplinesEntity, UsersEntity, DisciplineUsersEntity],
    synchronize: true,
    logging: true,
});

AppDataSource.initialize()
    .then(async () => {
        console.log('Data Source has been initialized successfully.');
    })
    .catch((error) => {
        console.error('Error during Data Source initialization:', error);
    });