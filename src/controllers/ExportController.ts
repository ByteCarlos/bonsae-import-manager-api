import { Request, Response } from 'express';
import { AcademicClassSQL } from '../models/mappers/AcademicClass.js';
import { sequelize } from '../connection/mysql.js';
import Discipline from '../models/Discipline.js';
import { DisciplineSQL } from '../models/mappers/Discipline.js';
import { SchoolPeriodSQL } from '../models/mappers/SchoolPeriod.js';
import User from '../models/User.js';
import { UserSQL } from '../models/mappers/User.js';
import AcademicClass from '../models/AcademicClass.js';
import SchoolPeriod from '../models/SchoolPeriod.js';

export const syncToBonsae = async (req: Request, res: Response): Promise<Response> => {
    const t = await sequelize.transaction();

    try {
        const academicClass = await AcademicClass.find();

        const insertedAcademicClass = [];

        await Promise.all(
            academicClass.map(async (classe) => {
                const classData = {
                    // TODO: colocar as propriedades
                };

                const classSQL = await AcademicClassSQL.create({ classData }, { transaction: t });
                insertedAcademicClass.push(classSQL);
            })
        );

        if (academicClass.length !== insertedAcademicClass.length)
            throw Error("Ocorreu um erro ao sincronizar os dados de turmas com o Bonsae.");

        const disciplines = await Discipline.find();

        const insertedDisciplines = [];

        await Promise.all(
            disciplines.map(async (discipline) => {
                const disciplineData = {
                    // TODO: colocar as propriedades
                }
                
                const disciplineSQL = await DisciplineSQL.create({ disciplineData }, { transaction: t });
                insertedDisciplines.push(disciplineSQL);

            })
        );

        if (disciplines.length !== insertedDisciplines.length)
            throw Error("Ocorreu um erro ao sincronizar os dados de disciplina com o Bonsae.");

        const schoolPeriods = await SchoolPeriod.find();

        const insertedSchoolPeriods = [];

        await Promise.all(
            schoolPeriods.map(async (period) => {
                const periodData = {
                    // TODO: colocar as propriedades
                }
                const periodSQL = await SchoolPeriodSQL.create({ periodData }, { transaction: t });
                insertedSchoolPeriods.push(periodSQL);
            })
        );

        if (schoolPeriods.length !== insertedSchoolPeriods.length)
            throw Error("Ocorreu um erro ao sincronizar os dados de período com o Bonsae.");

        const users = await User.find();

        const insertedUsers = [];

        await Promise.all(
            users.map(async (user) => {
                const userData = {
                    // TODO: colocar as propriedades
                }
                const userSQL = await UserSQL.create({ userData }, { transaction: t });
                insertedUsers.push(userSQL);
            })
        );

        if (users.length !== insertedUsers.length)
            throw Error("Ocorreu um erro ao sincronizar os dados de usuário com o Bonsae.");

        await t.commit();

        return res.status(200).json({ message: "Dados sincronizados com sucesso!" });
    } catch (error) {
        await t.rollback();
        return res.status(500).json({ error: (error as Error).message });
    }
}