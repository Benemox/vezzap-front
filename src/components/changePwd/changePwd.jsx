import React,{useState} from "react";
import { BrowserRouter as Redirect} from "react-router-dom";
import { useForm } from "react-hook-form";
import "./RegisterPage.css"
import registerbtn from '../../img/register.png';

function changePwd() {
      
      let [redirected,setRedirected] = useState(false)
    
      const { register, handleSubmit } = useForm();
      const onSubmit = d => {
        let  data = d.trim("> ")
        fetch(`http://localhost:7777/regUser/${pwd}`, {
			method: 'post',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(response => {
      if ( response.message) {
        let sms = document.querySelectorAll("#sms")
        sms.setAttribute("class", `${response.display}`)
        }
		})
      };
    

  return (
    <div className="screen-size screen-back">
        {redirected && <Redirect to={redirected}/> }
        
            <form action="" id='form-reg-1' onSubmit={handleSubmit(onSubmit)}>
            
              <fieldset className="borde">
              <p className="usual-text">Registrate en Vezapp</p>
                 {/* <i id=message className="nonedisplay" onClick={HandlepwdVisibility}></i> */}
                  <input type="text" name="user" id="user" placeholder="nombre" ref={register} className="inputform"/>
                  <input type="text" name="mail" id="mail" placeholder="example@gmail.com" ref={register} className="inputform"/>
                  <input type="password" name="pwd" id="pwd" placeholder="password" ref={register} className="inputform"/>
                  <input type="password" name="pwdR" id="pwdR" placeholder="repite password" ref={register} className="inputform"/>
    <input type="checkbox" className="hola"/>Acepta los termínos y condiciones
                      
                  <button  className='btn-157'><img src={registerbtn} alt="a" className="frameimg"/></button>
                      

              </fieldset>
            </form>
      
    </div>
  );
}

export default changePwd;