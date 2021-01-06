import React, { useState, useEffect, useContext } from 'react';
import { useForm } from '../../components/Hooks/useForm';
import { Fetch } from '../../components/Hooks/useFetch';
import { useRedirect } from '../../components/Hooks/useRedirect';
import { useValidator } from "../../components/Hooks/useValidator";
import { LoginContext } from '../../components/Context/LoginContext';
import { Error } from '../../components/Advice/Error';
import LoginCss from '../login/login.css';
import {Link} from "react-router-dom";
import logo from '../../img/Frame.png';
import loginbtn from '../../img/logon.png';
import vesapbtn from '../../img/boton1.png';


export const Login = () => {

    const Redirect = useRedirect();
    const Login = useContext(LoginContext);
    const {validateCredentials, validateEmail, validatePsw} = useValidator();

    const [formValues, handleInputChange] = useForm({
        email : "",
        psw : "",
    })

    const [statePsw, setStatePsw] = useState({
        type : "password",   
        placeholder : "**********"
    })

    let {email, psw} = formValues;
    const {type, placeholder} = statePsw;

    const HandlePswVisibility = (e) => {

        e.preventDefault();

        const psw = document.querySelector('#psw');
        
        setStatePsw({
            ...statePsw,
            type : "password" ? "text" : "password",
            placeholder : "**********" ? "123ytube" : "**********"
        });

        psw.type = statePsw.type
        psw.placeholder = statePsw.placeholder

        e.target.className = e.target.className === 'fas fa-eye' ? 'fas fa-eye-slash' : 'fas fa-eye';
    }

    useEffect(() => {
        
    }, [statePsw])

    const handleSubmit = (e) =>{

        e.preventDefault();

        if(!validateEmail(email)){
            email = "";
            document.querySelector("#email").className = `${LoginCss.ErrorInput}`;
            setTimeout(() => {
                document.querySelector("#email").className = ""
            },1500)

        }

        if(!validatePsw(psw)){
            psw = "";
            document.querySelector("#psw").className = `${LoginCss.ErrorInput}`;
            setTimeout(() => {
                document.querySelector("#psw").className = "";
            },1500)
        }

        if(validateCredentials(email, psw)){

            Fetch(`${process.env.REACT_APP_backUrl}/login`, {method : "post", data : {...formValues}})
            .then(data => {
                // console.log(data);
                if(data){
                    const {res, msg, result} = data;
                    console.log(res);

                    // eslint-disable-next-line default-case
                    switch(res){

                        case "1" :
                            Login.setLoginUserInfo(result)
                            Redirect("/Dasboard");
                            break;
                        case "-1" :
                            
                            break;
                        case "-2" :
                            console.log(Error)
                            return <Error res={res} msg={msg} />;
                        case "-3" :
                            
                            break;
                        case "-4" :
                            return <Error res={res} msg={msg}/>;
                    
                    }
                }
            })

        } else {

            email = "";
            psw = "";
            document.querySelector("#email").className = `${LoginCss.ErrorInput}`;
            document.querySelector("#psw").className = `${LoginCss.ErrorInput}`;
            setTimeout(() => {
                document.querySelector("#email").className = "";
                document.querySelector("#psw").className = "";
            },1500)
            return (
                <div className={LoginCss.ErrorInCredentials}>
                    <p>El email o contraseña que has introducido no son correctas, recuerda que la contraseña debe ser:</p>
                    <ul>
                        <li>Al menos una letra y un número</li>
                        <li>No puede contener carácteres alfanuméricos</li>
                        <li>Contener al menos seis carácteres</li>
                    </ul>

                </div>
            );
        }
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="screen-size screen-back Container42">
            <img src={logo} alt="a" className="frame"/>
                <input 
                    id="email"
                    type="text"
                    name="email"
                    placeholder="example@gmail.com"
                    autoComplete="off"
                    value={email}
                    className="happy-box78"    
                    onChange={handleInputChange}/>
                
                <br></br>

                <input 
                    id="psw"
                    type={type}
                    name="psw"
                    placeholder={placeholder}
                    autoComplete="off"
                    value={psw}
                    className="happy-box78"  
                    onChange={handleInputChange} />
                
                <i id={LoginCss.eye} className="fas fa-eye" onClick={HandlePswVisibility}></i>
                <br></br>

                <button type="submit" className="btn-157"><img src={loginbtn} alt="a" className="frameimg"/> </button>
                <br></br>

                <Link to="/register">  
                    <button name="checkAge" className="btn-157"><img src={vesapbtn} alt="a" className="frameimg"/></button>
                </Link>
                {/* <button className={LoginCss.backBtn} onClick={() => {redirect("/")}}>&lt;</button> */}
            </form>
        </div>
    )
}
export default Login