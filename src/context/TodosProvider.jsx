import React, {createContext, useState} from 'react'

export const TodoContext = createContext(null)

export default function TodosProvider({children}) {

    const [todos, setTodos] = useState([])

  return (
    <TodoContext.Provider value={{todos, setTodos}}>
        {children }
    </TodoContext.Provider>
  )
}
