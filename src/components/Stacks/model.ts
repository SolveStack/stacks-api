import * as bcrypt from 'bcrypt';
import * as connections from '../../config/connection/connection';
import * as crypto from 'crypto';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';

/**
 * @export
 * @interface IStackModel
 * @extends {Document}
 */

export interface IStackModel extends Document {
    _id: string;
    name: string;
    wikipediaLink: string;
};

const UserSchema: Schema = new Schema({
    _id: String,
    name: String,
    wikipediaLink: String,
})


export default connections.db.model < IStackModel > ('StackModel', UserSchema);
