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
    <div className="Register">
        {redirected && <Redirect to={redirected}/> }
        <div className='Facebook-login-bar-1'>
              <label htmlFor="" className="elige-perfil-1">perfil 1</label>
              <input type="checkbox" name="checkAge" className="elige-perfil-1"/>
        </div> 
        
            <form action="" id='form-reg-1' className='Frame-1'  onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="">Usuario</label>
              <input type="text" name="user" id="user" ref={register}/>
              <label htmlFor="">Mail</label>
              <input type="text" name="mail" id="mail" ref={register}/>
              <label htmlFor="">Pwd</label>
              <input type="password" name="pwd" id="pwd" ref={register}/>
              <label htmlFor="">Repite</label>
              <input type="password" name="pwdR" id="pwdR" ref={register}/>
              <button  className='Vezapp-Button-Login'>Enviar</button>
            </form>
            
        <div className='Facebook-login-bar-2'>
          <label htmlFor="" className='elige-perfil-2'>perfil 2</label>
          <input type="checkbox" name="checkAge" className="elige-perfil-2"/>
        </div>
      
    </div>
  );
}

export default RegisterPage;
