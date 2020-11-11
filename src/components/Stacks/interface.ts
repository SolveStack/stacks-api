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
}
