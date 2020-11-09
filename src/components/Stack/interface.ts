import { IStackModel } from './model';

/**
 * @export
 * @interface IStackService
 */
export interface IStackService {

    /**
     * @returns {Promise<IStackModel[]>}
     * @memberof IStackService
     */
    findAll(): Promise<IStackModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IStackModel>}
     * @memberof IStackService
     */
    findOne(code: string): Promise<IStackModel>;

    /**
     * @param {IStackModel} IStackModel
     * @returns {Promise<IStackModel>}
     * @memberof IStackService
     */
    insert(IStackModel: IStackModel): Promise<IStackModel>;

    /**
     * @param {string} id
     * @returns {Promise<IStackModel>}
     * @memberof IStackService
     */
    remove(id: string): Promise<IStackModel>;
}
