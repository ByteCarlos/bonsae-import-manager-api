import { Router } from 'express';
import ClassRoutes from './class.routes.js';
import EnrollmentRoutes from './enrollment.routes.js';
import SemesterRoutes from './semester.routes.js';
import SubjectRoutes from './subject.routes.js';
import UserRoutes from './user.routes.js';
import ImportRoutes from './import.routes.js';
const routes = Router();
routes.use('/class', ClassRoutes);
routes.use('/enrollment', EnrollmentRoutes);
routes.use('/semester', SemesterRoutes);
routes.use('/subject', SubjectRoutes);
routes.use('/user', UserRoutes);
routes.use('/import', ImportRoutes);
export default routes;
//# sourceMappingURL=index.js.map