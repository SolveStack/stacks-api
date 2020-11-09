import { Router } from 'express';
import { StackComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/stacks
 * 
 * @swagger
 * /v1/stacks:
 *   get:
 *     description: Get all stored stacks in Database
 *     tags: ["stacks"]
 *     security:
 *      - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: An array of stacks
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Stacks'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', StackComponent.findAll);

/**
 * GET method route 
 * @example http://localhost:PORT/v1/stacks/:id
 * 
 * @swagger
 * /v1/stacks/{id}:
 *  get:
 *    description: Get stack by stackId
 *    tags: ["stacks"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique stackId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return stack by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/StackSchema'
 */
router.get('/:id', StackComponent.findOne);

export default router;
