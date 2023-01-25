import React, { useEffect, useState } from "react";

const UserApi = () =>{
    const url = "http://localhost:8000/authuserlogin"
    const [husers,setHUsers]= useState([]);

    const fetchUser = async () =>{
        const response = await fetch(url);
        const data = await response.json();
        setHUsers(data)
    }
    
    useEffect(() => {
        
        fetchUser();



    },[]);

    return(
        <div>
        
        <h1>USERS</h1>
        <h2>Data consumida desde API BACKEND:<p> { husers }</p><br/> </h2>

     

        </div>


    )

}
    
export default UserApi