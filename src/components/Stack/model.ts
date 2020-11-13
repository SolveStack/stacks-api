import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';
import * as connections from '../../config/connection/connection';
import * as swaggerUi from 'swagger-ui-express';


/**
 * @export
 * @interface IStackModel
 * @extends {Document}
 */
export interface IStackModel extends Document {
    name: string;
    wikipediaLink: string;
    createdAt: number;
    createdBy: string;
    modifiedAt: number;
    modifiedBy: string;
}

export type AuthToken = {
    accessToken: string,
    kind: string
};

/**
 * @swagger
 * components:
 *  schemas:
 *    StackSchema:
 *      required:
 *        - name
 *        - wikipediaLink
 *      properties:
 *        id:
 *          type: string
 *        name:
 *          type: string
 *        wikipediaLink:
 *          type: string
 *    Stack:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/StackSchema'
 */

const StackSchema: Schema = new Schema(
    {
        name: {
            type: String,
            unique: true,
        },
        wikipediaLink: String,
        createdAt: Date,
        createdBy: String,
        modifiedAt: Date,
        modifiedBy: String
    },
    {
        collection: 'stackmodel',
        versionKey: false
    }
);

export default connections.db.model<IStackModel>('StackModel', StackSchema);
