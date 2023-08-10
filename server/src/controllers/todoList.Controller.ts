/* eslint-disable @typescript-eslint/no-unused-vars */
import { RequestHandler } from "express"
import Todo from '../model/todolist.model'
import asyncHandler from "express-async-handler"


// @decs get Todo list
// @route - todolist/api/get
// @access public

export const getTodoList:RequestHandler = asyncHandler( async(req,res,next) => {
   const getTodo = await Todo.find().exec()
   res.status(200).json(getTodo)
})

// @decs get Todo list with id
// @route - todolist/api/:id/ get
// @access public
type getTodolistById = {
    id:'string'
}

export const getTodoListById:RequestHandler<getTodolistById, unknown , unknown, unknown>  = asyncHandler( async(req,res,next) => {
    const id = (req.params.id).trim()

    const getTodoById = await Todo.findById(id).exec()
    res.status(200).json(getTodoById)
 })


// @decs create Todo list
// @route - todolist/api/post
// @access public

type createTodos ={
    title:string,
    body:string
}
export const createTodoList:RequestHandler<unknown, unknown , createTodos, unknown> = asyncHandler(async(req,res,next) => {
   const{title ,body} = req.body 

   if(!title || !body){
    res.status(400)
    throw new Error('all Fields Required')
   }

   const createTodos = await Todo.create({title,body})

   res.status(201).json({createTodos})
})

// @decs update Todo list
// @route - todolist/api/put
// @access public
export const updateTodoList:RequestHandler = asyncHandler(async(req,res,next) => {
    const id = (req.params.id).trim()
    const{title, body} = req.body

    if(!id){
        res.status(404)
        throw new Error('Id is not found')
    }

    const updateTodos = await Todo.findByIdAndUpdate(id,{$set:{title:title, body:body}})

    res.status(201).json(updateTodos)
})

// @decs delete Todo list
// @route - todolist/api/delete
// @access public

type deleteTodos ={
    id:string
}
export const deleteTodoList:RequestHandler<deleteTodos, unknown , unknown, unknown> = asyncHandler(async(req,res,next) => {
    const id = (req.params.id).trim()

    const deleteTodos = await Todo.findByIdAndDelete(id)

    if(!deleteTodos){
        res.status(400)
        throw new Error('failde to delete')
    }
    

    res.status(200).json({message:"seccessful", data:deleteTodos})
})