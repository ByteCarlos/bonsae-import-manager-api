import { Router } from 'express';

import ClassRoutes from './class.routes.js';
import ProfessorEnrollmentRoutes from './professorEnrollment.routes.js'
import StudentEnrollmentRoutes from './studentEnrollment.routes.js';
import SubjectRoutes from './subject.routes.js';
import UserRoutes from './user.routes.js';
import ImportRoutes from './import.routes.js';
import SchoolPeriodRoutes from './schoolPeriod.routes.js';
import ProcessRoutes from './process.routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swagger.js';

const routes = Router();

routes.use('/class', ClassRoutes);
routes.use('/professor-enrollment', ProfessorEnrollmentRoutes);
routes.use('/student-enrollment', StudentEnrollmentRoutes);
routes.use('/school-period', SchoolPeriodRoutes);
routes.use('/subject', SubjectRoutes);
routes.use('/user', UserRoutes);
routes.use('/import', ImportRoutes);
routes.use('/process', ProcessRoutes);
routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  customCssUrl: '/swagger/swagger-ui.css',
  customJs: [
    '/swagger/swagger-ui-bundle.js',
    '/swagger/swagger-ui-standalone-preset.js'
  ]
}));

export default routes;