import { Document, Schema } from 'mongoose';
import * as connections from '../../config/connection/connection';

/**
 * @export
 * @interface IStackModel
 * @extends {Document}
 */
export interface IStackModel extends Document {
    name: string;
    wikipediaLink: string;
}

const StackSchema: Schema = new Schema({
    name: String,
    wikipediaLink: String,
}, {
    collection: 'stackmodel',
    versionKey: false
});

export default connections.db.model < IStackModel > ('StackModel', StackSchema);
