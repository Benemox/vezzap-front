import React,{useState} from "react";
import { useHistory} from "react-router-dom";
import { useForm } from "react-hook-form";
import "./RegisterPage.css"
import registerbtn from '../../img/register.png';

function RegisterPage() {
      
     const stateElm = () => {
      let card = document.querySelectorAll(".card");
          let items = Array.from(card).map(elem => {
              if (elem.className === "") return elem.setAttribute("class", "card left")
              if (elem.className === "card right") return elem.setAttribute("class", "card center");
              if (elem.className === "card left") return elem.setAttribute("class", "card right");
       })
  }
     
      const history = useHistory()
      const { register, handleSubmit } = useForm();
      let mess = ""
      const onSubmit = (data) => {
        console.log(data)
        fetch("http://localhost:8080/regUser", {
			method: 'post',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
    })
    .then(res => res.json())
		.then(res => {
        let p = document.querySelector("#mess")
    
      if (res.ok === true) {
        p.setAttribute("class", "Display inputform")
        p.innerText = res.message
        console.log("funciona")
        history.push("/Dasboard")
        }else{
          p.setAttribute("class", "Display inputform")
          p.innerText = res.message
        }
		})
      };
    

  return (
    <div className="screen-size screen-back">
       
        
            <form action="" id='form-reg-1' onSubmit={handleSubmit(onSubmit)}>
            
              <fieldset className="borde">
              <p className="usual-text">Registrate en Vezapp</p>
                 
                  <input type="text" name="name" id="user" placeholder="nombre" ref={register} className="inputform"/>
                  <input type="text" name="email" id="mail" placeholder="example@gmail.com" ref={register} className="inputform"/>
                  <input type="password" name="pwd" id="pwd" placeholder="password" ref={register} className="inputform"/>
                  <input type="password" name="pwdR" id="pwdR" placeholder="repite password" ref={register} className="inputform"/>
    <input type="checkbox" className="hola"/>Acepta los termínos y condiciones
                       <br/><p id= "mess" className="Nodisplay">{mess}</p>
                  <button  className='btn-157'><img src={registerbtn} alt="a" className="frameimg"/></button>
                      

              </fieldset>
            </form>
      
    </div>
  );
}

export default RegisterPage;