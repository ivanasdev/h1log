import React, { useState } from "react";

const LoginForm = ({Login,error}) => {

    const [details,setDetails]=useState({name:"",email:"", password:""});

    const submitHandler = e =>{
        e.preventDefault();
        Login(details);

    }



    return(
        <div className="LoginForm container-fluid Cardmain"> 
          
            
   
            <form className="form=label" onSubmit={submitHandler}>

                <div>
                    <label >NAME</label>
                    <input type="text"
                    name="name"
                    value={details.name}
                    onChange={e => setDetails({...details,name: e.target.value})} />
                    
                </div>
                <div className="mb-3 ">
                    <label className="tit1">EMAIL</label>

                    <input type="text"
                        className="form-control inputlogin "
                        name="email"
                        value={details.email}
                        onChange={e => setDetails({...details,email: e.target.value})}
                    />

                </div>

                <div className="mb-3 ">
                    <label className="tit1">PASSWORD</label>
                    <input type="password"
                    name="password"
                    className="form-control inputlogin"
                    value={details.password}
                    onChange={e => setDetails({...details,password: e.target.value})}
                    />
       


                </div>


                <button className='btn btn1' type="submit ">INICIA SESI&Oacute;N</button>

            </form>
            </div>
        
    )


}

export default LoginForm