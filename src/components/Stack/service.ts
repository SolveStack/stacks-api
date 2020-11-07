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
    },

    /**
     * @param {IStackModel} stack
     * @returns {Promise < IUserModel >}
     * @memberof UserService
     */
    async insert(body: IStackModel): Promise < IStackModel > {
        try {
            const stack: IStackModel = await StackModel.create(body);
            return stack;
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
