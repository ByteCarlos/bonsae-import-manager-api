import { Request, Response } from 'express';
import Period from '../models/Period.js';
import Class from '../models/Class.js';
import User from '../models/User.js';
import Enrollment from '../models/Enrollment.js';
import Subject from '../models/Subject.js';

export default {
    async import(req: Request, res: Response) {
        try {
            const { data } = req.body;

            let periods: any[] = [];
            let subjects: any[] = [];
            let classes: any[] = [];
            let users: any[] = [];
            let enrollments: any[] = [];

            data.forEach((step: any) => {
                switch (step.type) {
                    case 'period':
                        periods = step.data.map((period: any) => new Period(period));
                        break;
                    case 'subject':
                        subjects = step.data.map((subject: any) => new Subject(subject));
                        break;
                    case 'class':
                        classes = step.data.map((classData: any) => new Class(classData));
                        break;
                    case 'user':
                        users = step.data.map((user: any) => new User(user));
                        break;
                    case 'enrollment':
                        enrollments = step.data.map((enrollment: any) => new Enrollment(enrollment));
                        break;
                }
            });

            const periodDocs = periods.length ? await Period.insertMany(periods) : [];
            const subjectDocs = subjects.length ? await Subject.insertMany(subjects) : [];
            const classDocs = classes.length ? await Class.insertMany(classes) : [];
            const userDocs = users.length ? await User.insertMany(users) : [];
            const enrollmentDocs = enrollments.length ? await Enrollment.insertMany(enrollments) : [];

            return res.status(201).json({
                message: 'Dados importados com sucesso!',
                periods: periodDocs,
                subjects: subjectDocs,
                classes: classDocs,
                users: userDocs,
                enrollments: enrollmentDocs,
            });
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    }
};

/* 
O método import foi adaptado para receber dados contendo um array com todas as etapas do fluxo de importação.
Em cada etapa existem os dados extraidos do csv importado e a identificação do tipo correspondente.

Exemplo de estrutura:
dados: [
    { tipo: 'period', dados: [{}, {}, {}] },
    { tipo: 'subject', dados: [{}, {}, {}] }
]
*/