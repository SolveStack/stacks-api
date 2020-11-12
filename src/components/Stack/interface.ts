import { IStackModel } from './model';
import * as swaggerUi from 'swagger-ui-express';

/**
 * @export
 * @interface IStackService
 */
export interface IStackService {
    /** 
     * @param {IStackModel} IStackModel
     * @returns {Promise<IStackModel>}
     * @memberof IStackService
     */
    insert(IStackModel: IStackModel): Promise<IStackModel>;

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
    update(IStackModel: IStackModel): Promise<IStackModel>;

    /**
     * @param {string} id
     * @returns {Promise<IStackModel>}
     * @memberof IStackService
     */
    remove(id: string): Promise<IStackModel>;
}
