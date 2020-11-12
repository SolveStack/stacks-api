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
/**
 * @export
 * @implements {IStackModelService}
 */
const StackService = {
    /**
    * @param {IStackModel} user
    * @returns {Promise < IStackModel >}
    * @memberof StackService
    */
    insert(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // TODO: Joi validation: 
                // const validate: Joi.ValidationResult < IStackModel > = StackValidation.createUser(body);
                // if (validate.error) {
                //     throw new Error(validate.error.message);
                // }
                const user = yield model_1.default.create(body);
                return user;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
};
exports.default = StackService;
//# sourceMappingURL=service.js.map