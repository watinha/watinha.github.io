//import { render } from '@testing-library/react';
import React, {/*Component,*/ /*useEffect,*/ useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import LogoAzul from './../../Images/logoLogin.svg';
import '../Login/SignIn.css';


function Example() {
    const history = useHistory();
    // Declaração das variaveis globais
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msgErro,setMsgErro] = useState("")
    

    const onChangeEmail = (e) => {
        const emailValeu = e.target.value
        setEmail(emailValeu)
    }
    const onChangePassword = (e) => {
        const passwordValue = e.target.value
        setPassword(passwordValue)
    }

    async function validationLogin() {
        const emailRegex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i

        if (password!=="" && emailRegex.test(email)){
            try {           
                const resultado = await axios.post(process.env.REACT_APP_API_URL+"/registro",{
                email: email,
                senha: password
                })
                console.log(resultado)
                history.push("/login")            
            } catch (error) {
                console.log(error)
                setMsgErro("Usuario já cadastrado")  
            }
        }else{
            setMsgErro("Formato de Usuario Incorreto")
           
        }
    }
  
    return(
    <body className="bodySingIn">
        <div className="container">
            <img src={LogoAzul} className="logoTipo" alt="logo"/>
            <div className="containerInputs">
                <input
                className="input" 
                type="email" 
                name="user"
                placeholder="e-mail"
                onChange={onChangeEmail}
                />
                <input
                className="input"  
                type="password" 
                name="senha"
                placeholder="senha"
                onChange={onChangePassword}
                />
            </div>

            <div className="containerButton">
                <button className="button" onClick={validationLogin}>Cadastrar-se</button>
            </div>

            {msgErro !== ""? <div className="erroContainerAparecer">{msgErro}</div> : "" }

            <div className="alternativeContainer">
                <span className="alternative">ou</span>       
            </div>

            <div className="containerButtonCadastrar">
                <button onClick={()=> {
                history.push("/login")}}
                className="button" >Voltar para Login</button>
            </div>
            
        </div>
    </body>
        
    )
}

export default Example;