import { useState } from "react";

export const Home = () => {
    
    const [userData, setUserData] = useState({
        name:"",
        email: "",
        password: ""
      })
    
      console.log(userData);
    
      const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:4000/user/signup",{
          method:"POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userData)
        })
    
        const data= await response.json();
        console.log(data)
      }
    
      const handleChange = (e) =>{
        const {name, value} = e.target;
        setUserData({...userData, [name]: value})
      }
    
      return (
        <div className="App">
          <p>Hola</p>
          <form action='' onSubmit={(e)=>handleSubmit(e)}>
            <input name='name' type='text' placeholder='Enter your name' value={userData.name} onChange={(e)=>handleChange(e)}/>
            <input name='email' type='text' placeholder='Enter your email' value={userData.email} onChange={(e)=>handleChange(e)}/>
            <input name='password' type='text' placeholder='Enter your password' value={userData.password} onChange={(e)=>handleChange(e)}/>
            <button type='submit'>Sign Up</button>
          </form>
        </div>
      )
}
