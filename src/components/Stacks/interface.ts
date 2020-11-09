import { IStackModel } from "./model";

/**
 * @export
 * @interface IStackService
 */
export interface IStackService {
      /**
     * @param {IStackModel} IStackModel
     * @returns {Promise<IStackModel>}
     * @memberof IUserservice
     */
    insert(IStackModel: IStackModel): Promise<IStackModel>;
}