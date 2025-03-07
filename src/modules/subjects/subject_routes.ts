import express from 'express';
import * as subjectController from '../subjects/subject_controller.js';

const router = express.Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     Subject:
 *       type: object
 *       required:
 *         - name
 *         - teacher
 *         - alumni
 *       properties:
 *         name:
 *           type: string
 *           description: Nom de l'assignatura
 *         teacher:
 *           type: string
 *           description: Nom del professor
 *         alumni:
 *           type: array
 *           items:
 *             type: string
 *           description: Array d'IDs dels alumnes matriculats
 *       example:
 *         name: Matemàtiques
 *         teacher: Pere Puig
 *         alumni: ['60d725b4e2f7cb001bce5ab1', '60d725b4e2f7cb001bce5ab2']
 */

/**
 * @openapi
 * /api/subjects:
 *   post:
 *     summary: Crea una nova assignatura
 *     tags: [Subjects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subject'
 *     responses:
 *       201:
 *         description: Assignatura creada correctament
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *       400:
 *         description: Dades invàlides
 */
router.post('/subjects/', subjectController.createSubject);

/**
 * @openapi
 * /api/subjects:
 *   get:
 *     summary: Retorna totes les assignatures
 *     tags: [Subjects]
 *     responses:
 *       200:
 *         description: Llista de totes les assignatures
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subject'
 */
router.get('/subjects/', subjectController.getSubjects);

/**
 * @openapi
 * /api/subjects/{id}:
 *   get:
 *     summary: Obté una assignatura per ID
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de l'assignatura
 *     responses:
 *       200:
 *         description: Detalls de l'assignatura
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *       404:
 *         description: Assignatura no trobada
 */
router.get('/subjects/:id', subjectController.getSubjectById);

/**
 * @openapi
 * /api/subjects/{id}:
 *   put:
 *     summary: Actualitza una assignatura
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de l'assignatura
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subject'
 *     responses:
 *       200:
 *         description: Assignatura actualitzada correctament
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *       404:
 *         description: Assignatura no trobada
 */
router.put('/subjects/:id', subjectController.updateSubject);

/**
 * @openapi
 * /api/subjects/{id}:
 *   delete:
 *     summary: Elimina una assignatura
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de l'assignatura
 *     responses:
 *       204:
 *         description: Assignatura eliminada correctament
 *       404:
 *         description: Assignatura no trobada
 */
router.delete('/subjects/:id', subjectController.deleteSubject);

/**
 * @openapi
 * /api/subjects/{id}/alumni:
 *   get:
 *     summary: Obté tots els alumnes d'una assignatura
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de l'assignatura
 *     responses:
 *       200:
 *         description: Llista d'alumnes de l'assignatura
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       404:
 *         description: Assignatura no trobada
 */
router.get('/subjects/:id/alumni', subjectController.getSubjectAlumni);

export default router;