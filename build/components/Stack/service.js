"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const validation_1 = require("./validation");
const mongoose_1 = require("mongoose");
/**
 * @export
 * @implements {IStackModelService}
 */
const StackService = {
    /**
    * @param {IStackModel} stack
    * @returns {Promise < IStackModel >}
    * @memberof StackService
    */
    insert(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.createStack(body);
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const stack = yield model_1.default.create(body);
                return stack;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
    * @returns {Promise < IStackModel[] >}
    * @memberof StackService
    */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield model_1.default.find({});
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {string} id
     * @returns {Promise < IStackModel >}
     * @memberof StackService
     */
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.getStack({
                    id
                });
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                return yield model_1.default.findOne({
                    _id: mongoose_1.Types.ObjectId(id)
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
    * @param {IStackModel} stack
    * @returns {Promise < IStackModel >}
    * @memberof StackService
    */
    update(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.updateStack(body);
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                let _id = body.id;
                let updateBody = {
                    name: body.name,
                    wikipediaLink: body.wikipediaLink,
                };
                const stack = yield model_1.default.updateOne(_id, updateBody, { new: true });
                return stack;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {string} id
     * @returns {Promise < IStackModel >}
     * @memberof StackService
     */
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.removeStack({
                    id
                });
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const stack = yield model_1.default.findOneAndRemove({
                    _id: mongoose_1.Types.ObjectId(id)
                });
                return stack;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
};
exports.default = StackService;
//# sourceMappingURL=service.js.map