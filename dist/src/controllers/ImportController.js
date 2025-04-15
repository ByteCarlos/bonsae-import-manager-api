import Period from '../models/Period.js';
import Subject from '../models/Subject.js';
import Class from '../models/Class.js';
import User from '../models/User.js';
import Enrollment from '../models/Enrollment.js';
export default {
    async import(req, res) {
        try {
            const { data } = req.body;
            const periods = [];
            const subjects = [];
            const classes = [];
            const users = [];
            const enrollments = [];
            data.forEach((row) => {
                switch (row.type) {
                    case 'period':
                        periods.push({ name: row.name });
                        break;
                    case 'subject':
                        subjects.push({ name: row.name, code: row.code });
                        break;
                    case 'class':
                        classes.push({ name: row.name, subjectId: row.subjectId });
                        break;
                    case 'user':
                        users.push({ name: row.name, role: row.role });
                        break;
                    case 'enrollment':
                        enrollments.push({ userId: row.userId, classId: row.classId });
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
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};
//# sourceMappingURL=ImportController.js.map