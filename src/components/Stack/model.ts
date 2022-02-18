import * as connections from "../../config/connection/connection";
import { Document, Schema } from "mongoose";
import { NextFunction } from "express";

/**
 * @export
 * @interface IStackModel
 * @extends {Document}
 */
export interface IStackModel extends Document {
  name: string;
  wikipediaLink: string;
}

const StackSchema: Schema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    wikipediaLink: String,
  },
  {
    collection: "stackmodel",
    versionKey: false,
  }
);

export default connections.db.model<IStackModel>("StackModel", StackSchema);
