import { useNavigate, useParams } from "react-router-dom"
import Form from "../components/Form"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import {  FetchTodoListById, UpdatedTodoList } from "../Api/Api"


const UpdateTodoList = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient()
  const {id} = useParams()
  const {data, isLoading, isError} = FetchTodoListById(id)
  console.log(data)
  const UpdateTodos = useMutation({
    mutationFn:UpdatedTodoList,
    onSuccess: () => {
      navigate('/')
      queryClient.invalidateQueries({ queryKey: ['todoList'] })  
    },
  })

  const handleUpdated = (updatePost) => {
      UpdateTodos.mutate({id, ...updatePost})
  }

  if(isLoading) return <h1>Loading....</h1>
  if(isError) return <h1>{Error.message}</h1>
  return (
    <>
    <h1 className="font-bold text-3xl">Edit TITLE & BODY|📃</h1>
    <div>
      <Form onSubmit={handleUpdated} initial={data}/>
      
    </div>
    
    </>
  )
}

export default UpdateTodoList
