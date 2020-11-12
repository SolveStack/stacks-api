import * as Joi from 'joi';
import StackModel, { IStackModel } from './model';
import { IStackService } from './interface';
import { Types } from 'mongoose';
import * as swaggerUi from 'swagger-ui-express';

/**
 * @export
 * @implements {IStackModelService}
 */

const StackService: IStackService = {

    /**
    * @param {IStackModel} stack
    * @returns {Promise < IStackModel >}
    * @memberof StackService
    */
    async insert(body: IStackModel): Promise<IStackModel> {
        try {
            // TODO: Joi validation: 
            // const validate: Joi.ValidationResult < IStackModel > = StackValidation.createUser(body);
            // if (validate.error) {
            //     throw new Error(validate.error.message);
            // }

            const stack: IStackModel = await StackModel.create(body);
            return stack;
        } catch (error) {
            throw new Error(error.message);
        }
    },

     /**
     * @returns {Promise < IStackModel[] >}
     * @memberof StackService
     */
    async findAll(): Promise < IStackModel[] > {
        try {
            return await StackModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IStackModel >}
     * @memberof StackService
     */
    async findOne(id: string): Promise < IStackModel > {
        try {
            // TODO: Joi validation: 

            return await StackModel.findOne({
                _id: Types.ObjectId(id)
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {IStackModel} stack  
    * @returns {Promise < IStackModel >}
    * @memberof StackService
    */
    async update(body: IStackModel): Promise<IStackModel> {
        try {
            // TODO: Joi validation

            let _id = body.id;
            let updateBody = {
                name: body.name,
                wikipediaLink: body.wikipediaLink,
            }
            const stack: IStackModel = await StackModel.updateOne
            (
                _id, updateBody, 
                {new: true}
            );

            return stack

        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IStackModel >}
     * @memberof StackService
     */
    async remove(id: string): Promise < IStackModel > {
        try {
            // TODO: Joi validation: 

            const stack: IStackModel = await StackModel.findOneAndRemove({
                _id: Types.ObjectId(id)
            });

            return stack;
        } catch (error) {
            throw new Error(error.message);
        }
    }

};

export default StackService;