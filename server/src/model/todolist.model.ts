import { InferSchemaType, Schema, model } from "mongoose";

const todoListSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true})

type Todo =  InferSchemaType<typeof todoListSchema>;

export default model<Todo>('Todos', todoListSchema)