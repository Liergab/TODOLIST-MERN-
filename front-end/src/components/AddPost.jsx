
import { CreateTodoList} from "../Api/Api"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import Form from "./Form"
import { useNavigate } from "react-router-dom"
const AddPost = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const createTodoList = useMutation({
        mutationFn: CreateTodoList,
        onSuccess: () => {
            navigate('/')
            queryClient.invalidateQueries({ queryKey: ['todoList'] })

            
          },
      })
      const HandleCreate = (newPost) => {
        createTodoList.mutate({ ...newPost})
      }
  return (
    <div>
        <Form onSubmit={HandleCreate} initial={{}}/>
    </div>
  )
}

export default AddPost
