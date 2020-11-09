const mongoose = require('mongoose');
import * as connections from '../../config/connection/connection';
import { Document, Schema } from 'mongoose';


/**
 * @export
 * @interface IStackModel
 * @extends {Document}
 */
export interface IStackModel extends Document {
    name: string;
    wikipediaLink: string;
    
}

/**
 * @swagger
 * components:
 *  schemas:
 *    StackSchema:
 *      required:
 *        - name
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
    name:{
        type: String,
        required: true
    },
    wikipediaLink:{
        type: String
    }},
    {
    collection: 'stackmodel',
    versionKey: false
});
export default connections.db.model < IStackModel >  ('StackModel', StackSchema);
