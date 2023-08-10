import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

export const FetchTodoList = () => {
    const {data, isLoading, isError} = useQuery(['todoList'], async() => {
        const response = await axios.get("http://localhost:5000/todolist/api");
        return response.data
        
    });

    return {data, isLoading, isError}
}

export const FetchTodoListById = (id) => {
    const {data, isLoading, isError} = useQuery(['todoList', id], async() => {
        const response = await axios.get(`http://localhost:5000/todolist/api/${id}`);
        return response.data
        
    });

    return {data, isLoading, isError}
}

export const CreateTodoList = async(NewPost) => {
  
        const response = await axios.post(`http://localhost:5000/todolist/api`, NewPost,{
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(NewPost)
        });
        return response.data
};

export const UpdatedTodoList = async(UpdatedPost) => {
  
    const response = await axios.put(`http://localhost:5000/todolist/api/${UpdatedPost.id}`, UpdatedPost,{
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(UpdatedPost)
    });
    return response.data
};

export const DeleteTodoList = async(id) => {
  
    const response = await axios.delete(`http://localhost:5000/todolist/api/${id}`,{
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(id)
    });
    return response.data
};



