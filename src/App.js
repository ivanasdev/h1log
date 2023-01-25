import React, { useState } from 'react';  
//import './App.css';
import LoginForm from './components/Access/LoginForm';
import UserApi from './components/users/users';


function App() {


  const adminUser = {
    email:"admin@horus.com",
    password:"admin"

  }


  const [user,setUser]=useState({name:"",email:"",password:""});
  const [error,setError]= useState("");
  
  /*Se  */

  const Login = details => {

    if(details.email === adminUser.email  && details.password === adminUser.password){
      setUser({
        name:details.name,
        email:details.email
      })
      console.log(details.name,details.email,details.password );
    }
    else{
      if(details.email== "" ){
        console.log("Email Empty")
      }
      else{
        console.log("SUCCESSFULL LOGIN");
      }

    }
  }
  
  const Logout = () =>{
    console.log("Logout")
  }


  return (
    <div className="App">
    {(user.email != "") ? (
      <div className='WelcomeLogin'>
        <h2>Bienvenidos, <span>{user.name}</span></h2>
        <button type="">LOGOUT</button>
        <UserApi />
        
      </div>
    ):/*Si no hya usuario nos pide logeo*/(
      <LoginForm Login={Login} error={error}  />
    )
    }



    
    
    </div>
  );
}

export default App;
