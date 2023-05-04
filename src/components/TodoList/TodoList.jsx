import { useState, useContext } from "react"
import { useTodo } from "../../hooks/useTodo"
import  {useEffect}  from "react"
import {TodoContext} from "../../context/TodosProvider"
import "./todoList.css"

export const TodoList = () => {

    // const [todos, setTodos] = useState([])
    const {todos, setTodos} = useContext(TodoContext)
    const {getTodosOfUser} = useTodo()

    useEffect(() => {
        getTodosOfUser().then(data =>{
            setTodos(data)
        })
    }, [])
    

    const handleDelete = async (e)=>{

        console.log("hola")
        const userID = window.localStorage.getItem("userID")
        const todoID = e.target.value
        try {
            const response = await fetch(`http://localhost:4000/todo/delete/${userID}`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    todoID
                })
            })

            const data2 = await response.json()

            console.log(data2)

        } catch (error) {
            console.error(error);
        }
        // getTodosOfUser().then(data =>{
        //     setTodos(data)
        // })
    }



    const handleModify = async (e) => {

    }

  return (
    <div>
        {todos.map(todo =>{
            return (
                <div key={todo._id} className="todoContainer">
                    <h1>{todo.topic}</h1>
                    <p>{todo.details}</p>
                    <button onClick={handleDelete} value={todo._id}>Delete</button>
                    <button onClick={handleModify} value={todo._id}>Modify Todo</button>
                </div>
            )
        })}
    </div>
  )
}
