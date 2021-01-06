import React,{useState} from "react";
import { BrowserRouter as Redirect} from "react-router-dom";
import { useForm } from "react-hook-form";
import "./RegisterPage.css"



function RegisterPage() {
      
      let [redirected,setRedirected] = useState(false)
    
      const { register, handleSubmit } = useForm();
      const onSubmit = d => {
        let  data = d.trim("> ")
        fetch("http://localhost:7777/register", {
			method: 'post',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(response => {
      if ( response.redirected) {
        setRedirected("/dasboard")
        }
		})
      };
    

  return (
    <div className="Register screen-size screen-back">
        {redirected && <Redirect to={redirected}/> }
        
            <form action="" id='form-reg-1' className='Frame-1'  onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="borde">
                 
              <label htmlFor="" className="labelform">Usuario</label>
              <input type="text" name="user" id="user" ref={register} className="inputform"/>
              <label htmlFor="" className="labelform">Mail</label>
              <input type="text" name="mail" id="mail" ref={register} className="inputform"/>
              <label htmlFor="" className="labelform">Pwd</label>
              <input type="password" name="pwd" id="pwd" ref={register} className="inputform"/>
              <label htmlFor="" className="labelform">Repite</label>
              <input type="password" name="pwdR" id="pwdR" ref={register} className="inputform"/>
              <button  className='Vezapp-Button-Login'>Enviar</button>
              </fieldset>
            </form>
      
    </div>
  );
}

export default RegisterPage;