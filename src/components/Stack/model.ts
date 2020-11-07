 import * as connections from '../../config/connection/connection';
 import { Document, Schema } from 'mongoose';

/**
 * @export
 * @interface IStackModel
 * @extends {Document}
 */
export interface IStackModel extends Document {
    name: String;
    wikipediaLink: String;
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
 *    Stacks:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/StackSchema'
 */

 const StackSchema: Schema = new Schema({
    name: String,
    wikipediaLink: String
 },
 {
     collection: 'stackmodel',
     versionKey: false
 })
 
export default connections.db.model < IStackModel > ('StackModel', StackSchema);