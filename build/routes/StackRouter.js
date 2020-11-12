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
 */
router.post("/", components_1.StackComponent.create);
/**
 * GET method route
 * @example http://localhost:PORT/v1/stacks
 */
router.get('/', components_1.StackComponent.findAll);
/**
 * GET method route
 * @example http://localhost:PORT/v1/stacks:id
 */
router.get('/:id', components_1.StackComponent.findOne);
/**
 * PATCH method route
 * @example http://localhost:PORT/v1/stacks
 */
router.patch('/', components_1.StackComponent.update);
/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/stacks/:id
*/
router.delete('/:id', components_1.StackComponent.remove);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=StackRouter.js.map