"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connections = require("../../config/connection/connection");
const StackSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    wikipediaLink: String,
    createdAt: Date,
    createdBy: String,
    modifiedAt: Date,
    modifiedBy: String,
}, {
    collection: 'stackmodel',
    versionKey: false
});
exports.default = connections.db.model('StackModel', StackSchema);
//# sourceMappingURL=model.js.map