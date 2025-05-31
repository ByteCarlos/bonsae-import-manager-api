// routes/import.routes.js
import { Router } from 'express';
import ImportController from '../controllers/ImportController.js';
import asyncHandler from '../utils/asyncHandler.js';

const router = Router();

/**
 * @swagger
 * /import/csv:
 *   post:
 *     summary: Importa dados de um CSV (formato JSON estruturado)
 *     tags: [Import]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: object
 *                 properties:
 *                   processId:
 *                     type: string
 *                     example: "process_2025_01"
 *                   schoolPeriod:
 *                     type: object
 *                     properties:
 *                       code:
 *                         type: string
 *                         example: "2025-1"
 *                       name:
 *                         type: string
 *                         example: "1º Semestre"
 *                       startDate:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-02-01T00:00:00.000Z"
 *                       endDate:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-06-30T00:00:00.000Z"
 *                   subjects:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         periodId:
 *                           type: string
 *                           example: "2025-1"
 *                         name:
 *                           type: string
 *                           example: "Direito Constitucional"
 *                         code:
 *                           type: string
 *                           example: "DCN001"
 *                         startDate:
 *                           type: string
 *                           format: date-time
 *                           example: "2025-02-10T00:00:00.000Z"
 *                         endDate:
 *                           type: string
 *                           format: date-time
 *                           example: "2025-06-15T00:00:00.000Z"
 *                         category:
 *                           type: string
 *                           example: "CURSO"
 *                         period:
 *                           type: string
 *                           example: "2"
 *                         state:
 *                           type: integer
 *                           example: 1
 *                         campus:
 *                           type: string
 *                           example: "Campus Central"
 *                   classes:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         subjectCode:
 *                           type: string
 *                           example: "DCN001"
 *                         shift:
 *                           type: string
 *                           example: "MATUTINO"
 *                         name:
 *                           type: string
 *                           example: "Turma A"
 *                         code:
 *                           type: string
 *                           example: "TURMA_A"
 *                   users:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         profileId:
 *                           type: string
 *                           example: "Aluno(a)"
 *                         name:
 *                           type: string
 *                           example: "Maria Silva"
 *                         email:
 *                           type: string
 *                           format: email
 *                           example: "maria.silva@example.com"
 *                         cpf:
 *                           type: string
 *                           example: "12345678900"
 *                         password:
 *                           type: string
 *                           example: "senhaSegura123"
 *                         registrationNumber:
 *                           type: string
 *                           example: "202512345"
 *                         telephone:
 *                           type: string
 *                           example: "(11) 99999-0000"
 *                         periodId:
 *                           type: integer
 *                           example: 2
 *                         observations:
 *                           type: string
 *                           example: "Estudante bolsista"
 *                   enrollments:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         subjectCode:
 *                           type: string
 *                           example: "DCN001"
 *                         classCode:
 *                           type: string
 *                           example: "TURMA_A"
 *                         registrationNumber:
 *                           type: string
 *                           example: "202512345"
 *                         email:
 *                           type: string
 *                           format: email
 *                           example: "maria.silva@example.com"
 *                         professor:
 *                           type: boolean
 *                           example: false
 *     responses:
 *       201:
 *         description: Dados importados com sucesso
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro ao importar dados
 */
router.post('/csv', asyncHandler(ImportController.import));

/**
 * @swagger
 * /import/save-data:
 *   post:
 *     summary: Salva dados processados no banco transacional
 *     tags: [Import]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Dados salvos com sucesso
 *       500:
 *         description: Erro ao salvar dados
 */
router.post('/save-data', asyncHandler(ImportController.saveData));

/**
 * @swagger
 * /import/save-documents/{id}:
 *   post:
 *     summary: Salva documentos do processo no banco transacional
 *     tags: [Import]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do processo
 *     responses:
 *       200:
 *         description: Documentos salvos com sucesso
 *       404:
 *         description: Processo não encontrado
 *       500:
 *         description: Erro ao salvar documentos
 */
router.post(
  '/save-documents/:id',
  asyncHandler(ImportController.saveDocumentsToTransactionalDatabase)
);

export default router;
