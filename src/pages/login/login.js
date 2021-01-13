import React, { useState, useEffect, useContext } from 'react';
import { useRedirect } from '../../components/Hooks/useRedirect';
import "./login.css";
import {Link} from "react-router-dom";
import logo from '../../img/Frame.png';
import loginbtn from '../../img/logon.png';
import vesapbtn from '../../img/boton1.png';
import Popup from "../../components/Popup/Popup"
//import {UserProvider, userProvider} from "../../components/Context/LoginContext"

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isOpen, setIsOpen] = useState(false);
 
    const user = {
        email: email,
        pwd: password
    }
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    const HandlepwdVisibility = () =>{
        let i = document.getElementById("i")
        if(i.className !== "nodisplayi"){
        i.setAttribute("className","displayi")}
        else{
            i.setAttribute("className","nodisplayi")
        }
    }
    const togglePopup = () => {
        setIsOpen(!isOpen);
      }
    console.log(user);
    const Redirect = useRedirect();
     const placeholder = "*******"
   
    const fetchData = async () => {
        const url = 'http://localhost:8080/login'
         await fetch (url, {            
            method:"POST",
           // credentials:"include",
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(user)
        })
        .then (data => {
            console.log(data);
            if(data.ok === true){
                Redirect("/Dasboard")}
                else{
                   HandlepwdVisibility();
                    
                }
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateEmail(user.email)){
            fetchData();
        }else{togglePopup()}
        
     }
    

    return (
        <div>
            <img src={logo} alt="a" className="frame"/>
            
            <form onSubmit={handleSubmit} className="screen-size screen-back Container42">
            
                <input 
                    id="email"
                    type="text"
                    name="email"
                    placeholder="example@gmail.com"
                    autoComplete="off"
                    value={email}
                    className="happy-box78"  
                    onChange={ (e) => setEmail(e.target.value) }
                   />
                
                <br></br>
                   
                <input 
                    id="pwd"
                    name="pwd"
                    type="password"
                    placeholder={placeholder}
                    autoComplete="off"
                    value={ password }
                    className="happy-box79" 
                    onChange={ (e) => setPassword(e.target.value) } 
                     />
                
                 <a href="/register" className="usual-link">No recuerdo la contraseña</a>
                        <div className="distance">
            
                    <br></br>{isOpen && <Popup
                        content={<>
                            <b>Todos los campos son Obligatorios</b>
                            <button>Reintentar</button>
                        </>}
                        handleClose={togglePopup}
                        />}
                   
                <button type="submit" className="btn-157"><img src={loginbtn} alt="a" className="frameimg"/> </button>
                <br></br>

                <Link to="/register">  
                    <button name="checkAge" className="btn-157"><img src={vesapbtn} alt="a" className="frameimg"/></button>
                </Link>
        </div>        
                {/* <button className={LoginCss.backBtn} onClick={() => {redirect("/")}}>&lt;</button> */}
            </form>
        </div>
    )
}
export default Login