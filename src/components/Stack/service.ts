import StackModel, { IStackModel } from './model';
import { IStackService } from './interface';
import { Types } from 'mongoose';


/**
 * @export
 * @implements {IStackModelService}
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
    },

    /**
     * @param {string} id
     * @returns {Promise < IStackModel >}
     * @memberof StackService
     */
    async findOne(id: string): Promise < IStackModel > {
        try {
            return await StackModel.findOne({
                _id: Types.ObjectId(id)
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default StackService;


