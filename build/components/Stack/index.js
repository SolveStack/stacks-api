"use strict";
// // import stacksService from './service';
// import { HttpError } from '../../config/error';
// import { NextFunction, Request, Response } from 'express';
// import * as bcrypt from 'bcrypt';
// import * as connections from '../../config/connection/connection';
// import * as crypto from 'crypto';
// import { Document, Schema } from 'mongoose';
// import IStackModel from './model'
// import StackService from './service';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
// /**
//  * @export
//  * @param {Request} req
//  * @param {Response} res
//  * @param {NextFunction} next
//  * @returns {Promise < void >}
//  */
// export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
//     try {
//         const stack = await StackService.findAll();
//         res.status(200).json(stack);
//     } catch (error) {
//         next(new HttpError(error.message.status, error.message));
//     }
// }
const service_1 = require("./service");
const error_1 = require("../../config/error");
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield service_1.default.insert(req.body);
            res.status(201).json(user);
        }
        catch (error) {
            next(new error_1.HttpError(error.message.status, error.message));
        }
    });
}
exports.create = create;
//# sourceMappingURL=index.js.map