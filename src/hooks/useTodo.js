import React from 'react'

export const useTodo = () => {

    const addTodo = async ({topic, details}) => {
        const userID = window.localStorage.getItem("userID")
        try {
            const response = await fetch(`http://localhost:4000/todo/create/${userID}`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    topic,
                    details
                })
            })

            const data = await response.json()

        } catch (error) {
            console.error(error);
        }
    }

    const getTodosOfUser = async () => {
        const userID = window.localStorage.getItem("userID")
        try {
            const response = await fetch(`http://localhost:4000/todo/${userID}`,{
            })

            const data = await response.json()

            return data.data

        } catch (error) {
            console.error(error);
        }
    }

  return (
    {addTodo,
    getTodosOfUser}
  )
}
