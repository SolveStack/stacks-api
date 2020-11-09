import Stacks from './model'
import { Request, Response } from 'express';

// Get All Stacks

export let findAll = (req: Request, res: Response) => {
    let stacks = Stacks.find((err: any, stacks: any) => {
        if(err){
            res.send(err)
        }else {
            res.send(stacks)
        }
    })
}

// Get Individual Stack

export let findOne = (req: Request , res: Response) => {
    Stacks.findById(req.params.id, (err: any, stacks: any) => {
        if(err) {
            res.send(err)
        }else {
            res.send(stacks)
        }
    })
}