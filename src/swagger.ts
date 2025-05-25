import swaggerJSDoc from 'swagger-jsdoc';
import { swaggerPaths } from './docs/swaggerPaths';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bonsae Import Manager',
      version: '1.0.0',
      description: 'Documentação da API usando Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3333',
        description: 'Servidor local',
      },
    ],
    paths: swaggerPaths,
    components: {
      schemas: {
        ClassDocument: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            subjectCode: { type: 'string' },
            shift: { type: 'string' },
            name: { type: 'string' },
            code: { type: 'string' },
            processId: { type: 'string' },
            processRef: { type: 'integer' },
            subjectRef: { type: 'integer' },
          },
          required: ['subjectCode', 'processId', 'processRef', 'subjectRef', 'name', 'code'],
        },
        ProcessDocument: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            processId: { type: 'integer' },
            startDate: { type: 'string', format: 'date-time' },
            endDate: { type: 'string', format: 'date-time' },
            schoolPeriod: { type: 'string' }
          },
          required: ['name', 'startDate', 'endDate', 'schoolPeriod'],
        },
        ProfessorEnrollmentDocument: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            subjectCode: { type: 'string' },
            classCode: { type: 'string' },
            registrationNumber: { type: 'string' },
            professorEmail: { type: 'string' },
            processId: { type: 'integer' },
          },
          required: ['subjectCode', 'classCode', 'registrationNumber', 'professorEmail', 'processId'],
        },
        SchoolPeriodDocument: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            code: { type: 'string' },
            startDate: { type: 'string', format: 'date' },
            endDate: { type: 'string', format: 'date' },
            processId: { type: 'integer' },
          },
          required: ['name', 'code', 'startDate', 'endDate', 'processId'],
        },
        StudentEnrollmentDocument: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            subjectCode: { type: 'string' },
            classCode: { type: 'string' },
            registrationNumber: { type: 'string' },
            studentEmail: { type: 'string' },
            processId: { type: 'integer' },
          },
          required: ['subjectCode', 'classCode', 'registrationNumber', 'studentEmail', 'processId'],
        },
        SubjectDocument: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            subjectCode: { type: 'string' },
            shift: { type: 'string' },
            name: { type: 'string' },
            code: { type: 'string' },
            startDate: { type: 'string', format: 'date' },
            endDate: { type: 'string', format: 'date' },
            category: { type: 'string' },
            state: { type: 'integer' },
            period: { type: 'string' },
            campus: { type: 'string' },
            processId: { type: 'integer' },
          },
          required: ['processId', 'name', 'code', 'startDate', 'endDate', 'category'],
        },
        UserDocument: {
          type: 'object',
          properties: {
            profileId: {
              type: 'string',
              description: 'Perfil do usuário',
              enum: ['Aluno(a)', 'Professor(a)', 'Coordenador(a)', 'Secretário(a)', 'Estagiário(a)', 'Advogado(a)']
            },
            subprofile: {
              type: 'string',
              description: 'Subperfil do usuário (opcional)',
              nullable: true
            },
            name: {
              type: 'string',
              description: 'Nome do usuário'
            },
            oab: {
              type: 'string',
              description: 'Número da OAB (opcional)',
              nullable: true
            },
            oabUf: {
              type: 'string',
              description: 'UF da OAB (opcional)',
              nullable: true
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'E-mail do usuário'
            },
            registrationNumber: {
              type: 'string',
              description: 'Número de matrícula (opcional)',
              nullable: true
            },
            telephone: {
              type: 'string',
              description: 'Telefone (opcional)',
              nullable: true
            },
            cpf: {
              type: 'string',
              description: 'CPF do usuário'
            },
            password: {
              type: 'string',
              description: 'Senha do usuário'
            },
            periodId: {
              type: 'integer',
              description: 'Período do curso (1 a 10)',
              enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              nullable: true
            },
            observations: {
              type: 'string',
              description: 'Observações adicionais (opcional)',
              nullable: true
            },
            processId: {
              type: 'string',
              description: 'ID do processo vinculado'
            },
            processRef: {
              type: 'string',
              description: 'Referência ao documento do processo',
              format: 'uuid'
            }
          },
          required: [
            'profileId',
            'name',
            'email',
            'cpf',
            'password',
            'processId',
            'processRef'
          ]
        }

      },
    },
  },
  apis: ['./routes/*.js', './controllers/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
