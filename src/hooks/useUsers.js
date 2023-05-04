import { useAuth0 } from "@auth0/auth0-react";
import { json } from "react-router-dom";

export default function useUsers() {

    const {user} = useAuth0()

    const checkUser = async () => {
        try {
            const response = await fetch("http://localhost:4000/user/check",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name: user.name, email: user.email})
            })

            const data = await response.json()

            console.log(data)
            window.localStorage.setItem("userID", data.id)

        } catch (error) {
            console.error(error);
        }
    } 

  return (
    {checkUser}
  )
}
