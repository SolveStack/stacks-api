"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connections = require("../../config/connection/connection");
/**
 * @swagger
 * components:
 *  schemas:
 *    StackSchema:
 *      required:
 *        - name
 *        - wikipediaLink
 *      properties:
 *        id:
 *          type: string
 *        name:
 *          type: string
 *        wikipediaLink:
 *          type: string
 *    Stack:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/StackSchema'
 */
const StackSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
    },
    wikipediaLink: String,
    createdAt: Date,
    createdBy: String,
    modifiedAt: Date,
    modifiedBy: String
}, {
    collection: 'stackmodel',
    versionKey: false
});
exports.default = connections.db.model('StackModel', StackSchema);
//# sourceMappingURL=model.js.map