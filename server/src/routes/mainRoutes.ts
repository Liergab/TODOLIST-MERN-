import express from 'express'
import * as todosContoller from '../controllers/todoList.Controller'
const router = express.Router();

router.get('/', todosContoller.getTodoList)
router.get('/:id', todosContoller.getTodoListById)
router.post('/', todosContoller.createTodoList)
router.put('/:id', todosContoller.updateTodoList)
router.delete('/:id', todosContoller.deleteTodoList)


export default router