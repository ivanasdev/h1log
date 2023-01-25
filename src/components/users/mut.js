import React from "react";
//import './App.css';
class Userdb extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                items.map((item) => ( 
                <ol key = { item.id } >
                    User_Name: { item.username }, 
                    Full_Name: { item.name }, 
                    User_Email: { item.email } 
                    </ol>
                ))
            }
        </div>
    );
}
}
   
export default Userdb;






import React, { useEffect, useState } from "react";

const UserApi = () =>{

    useEffect(() => {
        const url = "http://localhost:8000/authuserlogin"

        const fetchData = async () => {
            try {
              const response = await fetch(url);
              const json = await response.json();
              console.log(json);
            } catch (error) {
              console.log("error", error);
            }
          };


          fetchData();

    },[]);

    return(
        <div>
        
        <h1>USERS</h1>
        <h2>LA DATA </h2>

     

        </div>


    )

}
    
export default UserApi