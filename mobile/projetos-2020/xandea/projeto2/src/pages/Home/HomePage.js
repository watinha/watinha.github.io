import React, { useState, useEffect } from 'react';
import './HomePageStyle.css';
import { Link, useHistory} from 'react-router-dom';
import Banner from './../../Images/banner.png';
import LogoBranca from './../../Images/logotipo.svg';
import Seta from './../../Images/seta.png';
import Barra from './../../Images/menumobile.png';
import LogoMobile from './../../Images/logomobile.png';
import ItauIcon from './../../Images/itau-icon.png';
import InterIcon from './../../Images/inter-icon.png';
import NubankIcon from './../../Images/nubank-icon.png';
import C6Icon from './../../Images/c6-icon.png';
import BradescoIcon from './../../Images/bradesco-icon.png';


function HomePage() {
    const history = useHistory();
    const [usuario, setUsuario] = useState(null)
    const [rota,setRota] = useState("/registro")

    const realizarCotação = (e) => {
        //setUsuario(localStorage.getItem('@login/email'))
        if(usuario!==null){
            setUsuario(localStorage.getItem('@login/email'))
            history.push("/exchange")
        }else{
            history.push("/login")  
        }
        //const emailValeu = e.target.value
        //setEmail(emailValeu)
        //console.log(usuario)
    }
    useEffect(() => {
        setUsuario(localStorage.getItem('@login/email'))
        //console.log(usuario)

        if(usuario!==null){
            console.log("entrei")
            document.getElementsByClassName("button-entrar")[0].style.display="none"
            document.getElementsByClassName("button-criar")[0].innerHTML="Bem Vindo: "+usuario
            setRota("/exchange")
        }else{
            document.getElementsByClassName("button-entrar")[0].style.display="flex"
        }
        
      }, [usuario]);

    return(
        <body>
            <section className="background-container">
                <img className="background-image" src={Banner} alt="imagem de fundo" />
            </section>
            <header>
                <section className="wrapper">
                    <section className=" logo-container">
                        <img className="logo-branca" src={LogoBranca} alt="logotipo"/>
                    </section>
                    <section className="link-container">
                        <a className="link-menu" href="/#">PARA VOCÊ <img src={Seta} className="img-seta" alt=""/></a>
                        <a className="link-menu" href="/#">PARA SEU NEGÓCIO <img src={Seta}  className="img-seta" alt=""/></a>
                        <a className="link-menu" href="/#">SUPORTE PARA NEGÓCIOS <img src={Seta}  className="img-seta" alt=""/></a>
                    </section>
                    <section className="button-header">
                        <Link to="/login"className="button-entrar">Entrar</Link>
                        <a href={rota} className="button-criar">Criar conta</a>
                    </section>
                </section>
            </header>
            {/*ELEMENTOS MOBILE*/}
            <div className="header-mobile">
                <section className="button-container-mobile">
                    <a href="/#" className="button-header-mobile"><img src={Barra} className="barra-menu" alt=""/>Menu</a>
                </section>
                <section className="logo-container-mobile">
                    <img className="logo-mobile"src={LogoMobile} alt=""/>
                </section>
                <section className="button-container-mobile">
                    <a href="/login" className="button-header-mobile">Entrar</a>
                </section>
            </div>
            <div className="text-principal-container-mobile">
                <h1 className="text-principal-mobile">O Paypal agora</h1>
                <h1 className="text-principal-mobile" >tem débito online*.</h1>
            </div>
            {/*FIM ELEMENTOS MOBILE*/}      
            <section className="wrapper">
                <section className="div-center "> 
                    <div className="area-body-title"> 
                        <h1 className="text-title">O PayPal agora</h1>
                        <h1 className="text-title">tem débito on-line*.</h1>
                    </div>
                    <div className="area-subtitle"> 
                        <h2 className="subtitulo"> Adicione o cartão de débito à sua carteira do PayPal e comemore pequenas vitórias todos os dias.</h2>
                    </div>
                    <div className="area-button"> 
                        <button className="text-button">
                            <a href="/registro" className="text-button-link">Crie uma conta grátis</a>
                        </button>
                    </div>
                    <section className="area-bank"> 
                        <div className="area-bank-blocks-description">
                            <h3 className="text-bank">Cartões de débito</h3>
                        </div>
                        <div className="area-bank-blocks">
                            <img className="image-bank" src={ItauIcon} alt=""/>
                        </div>
                        <div className="area-bank-blocks">
                            <img className="image-bank" src={BradescoIcon} alt=""/>
                        </div>
                        <div className="area-bank-blocks">
                            <img className="image-bank" src={NubankIcon} alt=""/>
                        </div>
                        <div className="area-bank-blocks">
                            <img className="image-bank" src={C6Icon} alt=""/>
                        </div>
                        <div className="area-bank-blocks">
                            <img className="image-bank" src={InterIcon} alt=""/>
                        </div>
                    </section>
                    <section>
                        <div className="area-term">
                            <h3 className="text-term">*Termos e condições aplicáveis</h3>
                        </div>
                    </section>
                </section>
            </section> 
            <footer>     
                <section className="footer-container" >
                    <p className="text-footer"> 
                        Quer conhecer as soluções do PayPal para Empresas? 
                        <span className="text-footer-mobile">
                            Conte com a gente para vender dentro 
                            ou fora do seu país.
                        </span>
                    </p>
                    <button onClick={realizarCotação} className="button-footer">
                        <spam className="button-footer">Realizar Cotação</spam>
                    </button>
                </section>
            </footer>
        </body>
    );
}

export default HomePage;