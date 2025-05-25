// routes/import.routes.js
import { Router } from 'express';
import ImportController from '../controllers/ImportController.js';
import asyncHandler from '../utils/asyncHandler.js';

const router = Router();

/**
 * @swagger
 * /import/csv:
 *   post:
 *     summary: Importa dados de um CSV
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
 *     responses:
 *       201:
 *         description: Dados importados com sucesso
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
