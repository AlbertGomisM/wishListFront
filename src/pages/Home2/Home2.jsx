import { useForm } from "react-hook-form"
import { useTodo } from "../../hooks/useTodo"
import { useEffect, useContext } from "react"
import useUsers from "../../hooks/useUsers"
import { TodoList } from "../../components/TodoList/TodoList"
import { TodoContext } from "../../context/TodosProvider"
import "./home.css"

export const Home2 = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm()
    const {addTodo, getTodosOfUser} = useTodo()
    const {checkUser} = useUsers()
    const {setTodos} = useContext(TodoContext)

    const onSubmit = async (data)=>{
        await addTodo(data)
        const todos = await getTodosOfUser();
        setTodos(todos);
        reset();
    }

    useEffect(() => {
      checkUser()

    }, [])
    

  return (
    <div className="generalDiv">
        <h1 className="title">ToDos</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='add Topic' {...register("topic") }/>
            <input type="text" placeholder='add details' {...register("details") } />
            <button type='submit'>Add</button>
        </form>
        <TodoList />
    </div>
  )
}
