import StackService from './service';
import { HttpError } from '../../config/error';
import { IStackModel } from './model';
import { NextFunction, Request, Response } from 'express';


/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const stacks: IStackModel[] = await StackService.findAll();

        res.status(200).json(stacks);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findOne(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const stack: IStackModel = await StackService.findOne(req.params.id);

        res.status(200).json(stack);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}