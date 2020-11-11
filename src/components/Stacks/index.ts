// import stacksService from './service';
import { HttpError } from '../../config/error';
import { NextFunction, Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import * as connections from '../../config/connection/connection';
import * as crypto from 'crypto';
import { Document, Schema } from 'mongoose';
import IStackModel from './model'
import StackService from './service';


/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */

export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const stack = await StackService.findAll();

        res.status(200).json(stack);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}