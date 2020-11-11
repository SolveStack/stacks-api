import * as Joi from 'joi';
import StackModel, { IStackModel } from './model';
import { Types } from 'mongoose';
import { IStackService } from './interface';


/**
 * @export
 * @implements {IStackService}
 */
const StackService: IStackService = {
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
    }
}


export default StackService;