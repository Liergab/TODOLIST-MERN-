/* eslint-disable react/prop-types */
import { useState } from "react"

const Form = ({onSubmit, initial}) => {
    const [post, setPost] = useState({ title: initial.title ||'', body: initial.body || ''})
    const [error,setError] = useState('')

    const handlePost = (e) => {
        setPost({...post, [e.target.name] : e.target.value})  
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!post){
          setError('All fields required!')
        }else {
          onSubmit(post)
          setPost({title:'' , body:''})
          console.log(post)
        }
      
    }
  return (
    <div className="flex items-end place-content-center">
      <form onSubmit={handleSubmit} className="flex flex-col
       place-content-center items-center mt-4 space-y-2 w-2/6 p-3 border-2 border-gray-700">
            <input type="text" name='title' value={post.title} onChange={handlePost} 
             placeholder="Title ..."
              className="w-60 p-2 border-2 border-gray-500"  />
            <textarea name='body' value={post.body} onChange={handlePost} 
            placeholder="Content ..."
            className="w-60 p-2   border-2 border-gray-700 text-l" />
            
            <button type="submit" className="py-2 px-3
             bg-cyan-600 rounded-md hover:bg-cyan-700 text-white">submit</button>
        </form>
        {error}
    </div>
  )
}

export default Form
