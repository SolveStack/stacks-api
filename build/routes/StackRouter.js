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
// router.get('/', StackComponent.findAll);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=StackRouter.js.map