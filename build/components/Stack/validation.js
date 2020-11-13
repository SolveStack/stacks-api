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
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof StackValidation
     */
    getStack(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });
        return Joi.validate(body, schema);
    }
    /**
     * @param {IStackModel} params
     * @returns {Joi.ValidationResult<IStackModel >}
     * @memberof StackValidation
     */
    updateStack(params) {
        const schema = Joi.object().keys({
            _id: this.customJoi.objectId().required(),
            name: Joi.string().required(),
            wikipediaLink: Joi.string().uri().required()
        });
        return Joi.validate(params, schema);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof StackValidation
     */
    removeStack(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });
        return Joi.validate(body, schema);
    }
}
exports.default = new StackValidation();
//# sourceMappingURL=validation.js.map