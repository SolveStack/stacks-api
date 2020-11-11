"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connections = require("../../config/connection/connection");
const mongoose_1 = require("mongoose");
;
const UserSchema = new mongoose_1.Schema({
    _id: String,
    name: String,
    wikipediaLink: String,
});
exports.default = connections.db.model('StackModel', UserSchema);
//# sourceMappingURL=model.js.map