import {Schema}from 'mongoose'
import * as connections from '../../config/connection/connection';


/**
 * @swagger
 * components:
 *  schemas:
 *    StackSchema:
 *      properties:
 *          id: type:string
 *          name: type: string
 *          wikipediaLink": type: string
 *    Stacks: 
 *      type:array
 *      items:
 *      $ref: #/components/schemas/StackSchema
 */
// Creating Schema Model
// const StacksSchema= new Schema({
//     name: {type: String},
//     wikipediaLink: {type:String}
// },
// {
//     collection: "stackmodel"
// });

// Creating schema for Stack
// Created a collection inside user_DB

const StacksSchema: Schema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true
    },
    wikipediaLink: String,
    
}, {
    collection: 'stackmodel',
    versionKey: false
})

const Stacks = connections.db.model("stackmodel", StacksSchema)

export default Stacks;

