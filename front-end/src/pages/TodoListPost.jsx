// import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { DeleteTodoList, FetchTodoList } from "../Api/Api"
import AddPost from "../components/AddPost"
import { useMutation, useQueryClient } from "@tanstack/react-query"


const TodoListPost = () => {
  const navigate = useNavigate()
     const queryClient = useQueryClient()
    const{data, isLoading, isError} = FetchTodoList()

    const deleteTodoList = useMutation({
      mutationFn:DeleteTodoList,
      onSuccess: () => {
        navigate('/'),
        queryClient.invalidateQueries('todoList')
        
      }

    })
    const handleDelete = (id) => {
        deleteTodoList.mutate(id)
    }
    if(isLoading) return <h1>Loading ...</h1>
    if(isError)  return <h1>{Error.message}</h1>
    
  return (
    <div className="h-full flex flex-col space-y-3">
       <AddPost />
      <div className="flex-1 flex flex-col space-y-2">
        <h1 className="font-semibold text-xl">List</h1>
        {data.length == 0 ? <h1 className="text-2xl">No List Found .... </h1> :
        <div className="flex flex-wrap space-y-4 gap-x-2 items-end place-content-center">
          {data.map((Todo) => {
            return (
              <div className=" flex flex-col   bg-slate-500 p-2 w-2/6  h-3/6  " key={Todo._id}>
                <div className="flex-1 bg-slate-200">
                  <div className="flex space-x-2">
                    <span className="font-bold">Title : </span>
                    <h1>{Todo.title}</h1>
                  </div>
                  
                  <div className="flex space-x-2">
                    <span className="font-bold">Body:</span>
                     <h1 className="max-w-fit text-left">{Todo.body}</h1>
                  </div>
                </div>
                <div className=" bg-slate-600 flex justify-between px-4">
                  <button onClick={() => navigate(`/post/${Todo._id}`)}><i className="fa-solid fa-eye"></i></button>
                  <button onClick={() => handleDelete(Todo._id)}><i className="fa-solid fa-trash"></i></button>
                  <button onClick={() => navigate(`/post/edit/${Todo._id}`)}><i className="fa-solid fa-pen-to-square"></i></button>
                </div>
              </div>
            )
          })}
        </div>
        }
       
      </div>
    </div>
  )
}

export default TodoListPost
