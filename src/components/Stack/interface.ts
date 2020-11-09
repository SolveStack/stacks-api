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
}
