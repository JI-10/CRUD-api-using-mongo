import mongoose from "mongoose"

export const userSchema = new mongoose.Schema({
    username:{type:String,unique:true},
    points: Number,
    alloted_space: String,
    email: {type:String,unique:true},
    password: {type:String},
    image:Buffer,
})

export class User{
    id: string
    username: string
    points: number
    alloted_space: string
    email: string
    password: string
    image:Buffer
}
