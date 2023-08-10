import { useNavigate, useParams } from "react-router-dom"
import { FetchTodoListById } from "../Api/Api"


const SinglePost = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const {data, isLoading ,isError} = FetchTodoListById(id)
console.log(data)
if(isLoading) return <h1>Loading .....</h1>

if(isError) return <h1>{Error.message}</h1>

  return (
    <>
      <div className="h-screen  flex flex-col space-y-4 place-content-center items-center mt-[-100px]">
        <div className="w-6/12 h-auto  flex flex-col border-2 border-b-orange-200 bg-slate-800 p-4 rounded-md space-y-2  ">
          <div className=" p-2 flex items-center font-bold text-left rounded-md bg-slate-50" >
            <h1 className="text-5xl">Title: {data.title}</h1> 
          </div>
          <div className="flex-1 flex items-center place-content-center font-bold bg-slate-50 rounded-md p-4">
            <h1 className="text-2xl">{data.body}</h1>
          </div>
        </div>
        <button onClick={() => navigate('/')}>👈 Go back to List</button>
      </div>
    </>
  )
}

export default SinglePost
