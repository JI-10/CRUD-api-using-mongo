import { date } from 'joi'
import * as mongoose from 'mongoose'

export const psSchema = new mongoose.Schema({
    user_profile: String,
    image: String,
    location: {type:JSON,unique:true}
},{timestamps:true})

export class Ps{
    
          id: string 
          user_profile:string
          image:string
          location:JSON
}