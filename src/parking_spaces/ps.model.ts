import { date } from 'joi'
import * as mongoose from 'mongoose'
import internal from 'stream'

export const psSchema = new mongoose.Schema({
    user_suggested: String,
    user_alloted: String,
    tags: String,
    desc: String,
    image: String,
    location: { type: JSON, unique: true }

}, { timestamps: true })


export const tagSchema = new mongoose.Schema({
    label: String,
})

export class Ps {
    id: string
    user_suggested: string
    user_alloted: string
    tags: string
    desc: string
    image: FormData
    location: JSON
}

export class tags{
    id: string
    label: string
}