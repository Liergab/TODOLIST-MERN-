import Navbar from "./components/Navbar";
import './App.css'
import TodoListPost from "./pages/TodoListPost";
import { Routes, Route} from 'react-router-dom'
import SinglePost from "./pages/SinglePost";
import UpdateTodoList from "./pages/UpdateTodoList";

export default function App() {
  return (
   <div className="App  bg-orange-100">
    <Navbar/>
    <Routes>
      <Route path="/" element={<TodoListPost />}/>
      <Route path="/post/:id"  element={<SinglePost />} />
      <Route path="/post/edit/:id"  element={<UpdateTodoList />} />
      <Route path="*"  element={<h1>Error</h1>}/>
    </Routes>
   </div>
  )
}