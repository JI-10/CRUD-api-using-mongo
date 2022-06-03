import * as mongoose from 'mongoose'
import { json } from 'stream/consumers'

export const psSchema = new mongoose.Schema({
    user_profile: String,
    image: String,
    location: JSON,
},{timestamps:true})
export class Ps{
    
          id: string 
          user_profile:string
          image:string
          location:JSON
}