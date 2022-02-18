import { IStackModel } from "./model";

/**
 * @export
 * @interface IStackService
 */
export interface IStackService {
  /**
   * @param {IStackModel} IStackModel
   * @returns {Promise<IStackModel>}
   * @memberof IUserService
   */
  insert(IStackModel: IStackModel): Promise<IStackModel>;
}
