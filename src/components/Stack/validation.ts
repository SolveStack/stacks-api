import * as Joi from 'joi';
import Validation from '../validation';
import { IStackModel } from './model';


/**
 * @export
 * @class StackValidation
 * @extends Validation
 */
class StackValidation extends Validation {

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
    createStack(
        params: IStackModel
    ): Joi.ValidationResult < IStackModel > {
        const schema: Joi.Schema = Joi.object().keys({
            
            name: Joi.string().required(),
            wikipediaLink: Joi.string().uri().required()
        });

        return Joi.validate(params, schema);
    }

//     /**
//      * @param {{ id: string }} body
//      * @returns {Joi.ValidationResult<{ id: string }>}
//      * @memberof UserValidation
//      */
//     getUser(
//         body: {
//             id: string
//         }
//     ): Joi.ValidationResult < {
//         id: string
//     } > {
//         const schema: Joi.Schema = Joi.object().keys({
//             id: this.customJoi.objectId().required()
//         });

//         return Joi.validate(body, schema);
//     }

//     /**
//      * @param {{ id: string }} body
//      * @returns {Joi.ValidationResult<{ id: string }>}
//      * @memberof UserValidation
//      */
//     removeUser(
//         body: {
//             id: string
//         }
//     ): Joi.ValidationResult < {
//         id: string
//     } > {
//         const schema: Joi.Schema = Joi.object().keys({
//             id: this.customJoi.objectId().required()
//         });

//         return Joi.validate(body, schema);
//     }
}

export default new StackValidation();