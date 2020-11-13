"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const components_1 = require("../components");
/**
 * @constant {express.Router}
 */
const router = express_1.Router();
/**
 * POST method route
 * @example http://localhost:PORT/v1/stacks
 *
 * @swagger
 * /v1/stacks:
 *   post:
 *      description: Create new Stack
 *      tags: ["stacks"]
 *      security:
 *       - ApiKeyAuth: []
 *      requestBody:
 *        description: stack creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/StackSchema'
 *            example:
 *              name: stackName
 *              wikipediaLink: https://en.wikipedia.com/stack
 *      responses:
 *        201:
 *          description: return created stack
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/StackSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post("/", components_1.StackComponent.create);
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
router.get('/', components_1.StackComponent.findAll);
/**
 * GET method route
 * @example http://localhost:PORT/v1/stacks:id
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
router.get('/:id', components_1.StackComponent.findOne);
/**
 * PATCH method route
 * @example http://localhost:PORT/v1/stacks/:id
 *
 * @swagger
 * /v1/stacks/{id}:
 *  patch:
 *    description: Update stack by stackId
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
 *        description: return updated stack
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/StackSchema'
 */
router.patch('/:id', components_1.StackComponent.update);
/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/stacks/:id
 *
 * @swagger
 * /v1/stacks/{id}:
 *  delete:
 *    description: Delete stack by stackId
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
 *    requestBody:
 *        description: stack update request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/StackSchema'
 *            example:
 *              id: '5fac7592e79044cc3545e778c8'
 *              name: stackName
 *              wikipediaLink: https://en.wikipedia.com/stack
 *    responses:
 *      200:
 *        description: return deleted stack
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/StackSchema'
 */
router.delete('/:id', components_1.StackComponent.remove);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=StackRouter.js.map