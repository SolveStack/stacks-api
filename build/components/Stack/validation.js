"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const validation_1 = require("../validation");
/**
 * @export
 * @class StackValidation
 * @extends Validation
 */
class StackValidation extends validation_1.default {
    /**
     * Creates an instance of StackValidation.
     * @memberof StackValidation
     */
    constructor() {
        super();
    }
    /**
     * @param {IStackModel} params
     * @returns {Joi.ValidationResult<IStackModel >}
     * @memberof StackValidation
     */
    createStack(params) {
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            wikipediaLink: Joi.string().uri().required()
        });
        return Joi.validate(params, schema);
    }
}
exports.default = new StackValidation();
//# sourceMappingURL=validation.js.map