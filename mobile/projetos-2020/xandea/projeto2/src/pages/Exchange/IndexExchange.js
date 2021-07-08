import React, {useState, useEffect} from 'react';
import { Link,  useHistory} from 'react-router-dom';
import axios from 'axios';
import './styleIndexExchange.css';
import LogoAzul from './../../Images/logoLogin.svg';


function IndexExchange(){

    const [moedaBase, setMoedaBase] = useState("");
    const [moedaCotacao, setMoedaCotacao] = useState("");
    const [valor, setValor] = useState("1");
    const [dadosDaRequesicao, setDadosDaRequisicao] = useState("");
    const [msgError,setMsgError] = useState("");
    const [mudaEstiloOne,setMudaEstiloOne] = useState();
    const [mudaEstiloTwo,setMudaEstiloTwo] = useState();
    const [mostraCadastro, setMostrarCadastro] = useState();
    const [index, setIndex] = useState("");
    const [nome, setNome] = useState("");
    const [valorMoeda,setValorMoeda] = useState("");
    const [valorMoedaReal, setValorMoedaReal] = useState("");
    const [msgCadastro,setMsgCadastro] = useState("");
    const [moedas,setMoedas] = useState();
    

    const history = useHistory();

    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth()+1;
    const ano = data.getFullYear();
    const horario = data.getHours();
    const minuto = data.getUTCMinutes();

    var cont = 0;
    
    //PARA CONSULTAR MOEDA
    const handleChangeMoedaBase =(e)=>{
        const moedaBaseValue = e.target.value;
        setMoedaBase(moedaBaseValue);
    }

    const handleChangeMoedaCotacao = (e)=>{
        const moedaCotacaoValue = e.target.value;
        setMoedaCotacao(moedaCotacaoValue);
    }

    const handleChangeValor = (e) =>{
        const valorValue = e.target.value;
        setValor(valorValue);
    }
    //PARA O CADASTRO DA MOEDA
    const handleChangeIndex = (e) =>{
        const indexValue = e.target.value;
        setIndex(indexValue);
    }
    const handleChangeNome = (e) =>{
        const nomeValue = e.target.value;
        setNome(nomeValue);
    }
    const handleChangeValorMoeda = (e) =>{
        const valorMoedaValue = e.target.value;
        setValorMoeda(valorMoedaValue);
    }
    const handleChangeValorMoedaReal = (e) =>{
        const valorMoedaRealValue = e.target.value;
        setValorMoedaReal(valorMoedaRealValue);
    }
    //PARA VERIFICAÇÃO DE ERRO E CONSULTA
    const converterMethod = async ()=>{
        if(moedaBase === "" && moedaCotacao ===""){
            setMsgError("Erro: É necessário selecionar uma moeda base");
            setMudaEstiloOne({border:"0.5px solid red"});
            setMudaEstiloTwo({border:"0.5px solid red"});
           
        }
        else if(moedaBase ==="" && moedaCotacao!==""){
            setMsgError("Erro: É necessário selecionar uma moeda base ao invés de cotação");
            setMudaEstiloOne({border:"0.5px solid red"});
            setMudaEstiloTwo({border:"0.5px solid black"});
        }
        else if(moedaBase!=="" && moedaCotacao ===""){
            const resposta = await axios.get(process.env.REACT_APP_API_URL+'/pair',
                                            {moedaBase: moedaBase, moedaCotacao:'BRL'});
            const dadosDaRequesicaoValue = resposta.data;
            setDadosDaRequisicao(dadosDaRequesicaoValue);
            setMsgError("MoedaBaseSelecionado");
            setMudaEstiloOne({border:"0.5px solid black"});
            setMudaEstiloTwo({border:"0.5px solid black"});
        }
        else{
            const resposta = await axios.get(process.env.REACT_APP_API_URL+'/pair',
                                            {moedaBase: moedaBase, moedaCotacao:moedaCotacao});
            const dadosDaRequesicaoValue = resposta.data;
            setDadosDaRequisicao(dadosDaRequesicaoValue); 
            setMsgError("MoedaBaseCotacaoSelecionado");
            setMudaEstiloOne({border:"0.5px solid black"});
            setMudaEstiloTwo({border:"0.5px solid black"});
          
        }
        
    }
    const mostraCadastrarMoeda = async ()=>{
        setMostrarCadastro({display: "flex"});
    }
    async function cadastrarMoeda() {
        if (index !=="" && nome!=="" && valorMoeda !=="" && valorMoedaReal !==""){
            try {           
                let resultado = await axios.post(process.env.REACT_APP_API_URL+"/cadastrarMoeda",{
                index: index,
                nome: nome,
                valorMoeda:valorMoeda,
                valorMoedaReal:valorMoedaReal
                })
                if(resultado.status === 200){
                    setMsgError('MoedaCorreta');
                    setMostrarCadastro({display: "none"})
                    //Insere no select a nova moeda
                    var select = document.getElementsByClassName('select')[0],
                        selectTwo = document.getElementsByClassName('select')[1],
                        option = document.createElement('option');

                        option.value = index;
                        option.innerHTML = index +'  '+nome;
                        select.appendChild(option);
                        selectTwo.appendChild(option);
                }       
            } catch (error) {
                console.log(error)
                setMsgCadastro('Erro: Moeda já cadastrada');  
            }
        }else{
            setMsgCadastro('Erro: Formato de moeda incorreto');
        }
    }
    async function buscaMoeda(){
        try {
            let resultado = await axios.get(process.env.REACT_APP_API_URL+"/buscarMoeda")
            setMoedas(resultado.data.verifica)
        } catch (error) {
            console.log(error)
        }
    }
 
    function geraOption(){
        var i =0, 
            selectTwo =document.getElementsByClassName('select')[1],
            select = document.getElementsByClassName('select')[0];
        for(i=0; i<Object.keys(moedas).length; i++){
                var option = document.createElement('option');
                option.value = moedas[i].index;
                option.innerHTML = moedas[i].index +'  '+ moedas[i].nome;
                select.appendChild(option);
                selectTwo.appendChild(option);
        }
    }
    
    const deslogar = (e) =>{
        localStorage.removeItem('@login/email');
        localStorage.removeItem('@login/tokin');
    }
    async function VerificaUsuarioLogado() {
        const usuario = localStorage.getItem('@login/tokin');
        try{
        const resultado = await axios.get(process.env.REACT_APP_API_URL+"/exchange",{
            headers: { 'authorization': usuario}
        })
        }catch(error){
            console.log(error)
            history.push('/login')
        }
        
    }

    useEffect(() => {
        VerificaUsuarioLogado();
      }, );
    
        return(
            <div className="divHeader">
                <div className="subDivHeader">
                    <div className="menuDropdown">
                        <button className="btnDropdown">Menu</button>
                        <div className="sectionLinks">
                            <Link to="/">Pagina Inicial</Link>
                            <Link to="/" onClick={deslogar}>Logout</Link>
                        </div>
                    </div>
                    <div className="divImgLogoAzul">
                        <img src={LogoAzul} className="logoazul" alt="logo"/>
                    </div>
                    <div>
                        <button onClick={mostraCadastrarMoeda} className="buttonConverte">Cadastrar Moeda</button>
                    </div>
                </div>
                <div className="divCadastroMoeda" style={mostraCadastro}>
                    <h2 className="tagh2">Cadastrar Moeda</h2>
                    <div className="formCadastrarMoeda">
                    {msgCadastro !== "MoedaCorreta" ? <span className="msgError" style={{display:"flex", color:"red"}}>{msgCadastro}</span> : "" }
                        <section className = "sectionInputs">
                            <label for="index" className="labelForm">Index</label>
                            <input
                                    type="text" 
                                    id="index" 
                                    name="index"
                                    onChange={handleChangeIndex}/>
                        </section>
                        <section className = "sectionInputs">
                            <label for="nome" className="labelForm">Nome</label>
                            <input 
                                    type="text" 
                                    id="Nome" 
                                    name="nome"
                                    onChange={handleChangeNome}/>
                        </section>
                        <section className = "sectionInputs">
                            <label for="valor" className="labelForm">Valor</label>
                            <input 
                                    type="text" 
                                    id="valor" 
                                    name="valor"
                                    onChange={handleChangeValorMoeda}/>
                        </section>
                        <section className = "sectionInputs">
                            <label for="valorReal" className="labelForm">Valor da moeda em REAL</label>
                            <input 
                                    type="text" 
                                    id="valorReal" 
                                    name="valorReal"
                                    onChange={handleChangeValorMoedaReal}/>
                        </section>
                        <section className="sectionInputs">     
                            <button className="buttonConverte" onClick={cadastrarMoeda} name="enviar"> Cadastrar </button>
                        </section>
                    </div>
                </div>
                <section className="textCotacao">
                    <h2 className="tagh2">Cotação de Moedas</h2>
                </section>
                <div className="divInformacao">
                    {msgError === "MoedaCorreta" ? <span className="msgError" style={{display:"flex", color:"green"}}>Moeda cadastrada com sucesso !!</span> : "" }
                    {msgError !== "MoedaBaseSelecionado" && msgError !== "MoedaBaseCotacaoSelecionado" &&msgError !== "MoedaCorreta" ? <span className="msgError" style={{display:"flex"}}>{msgError}</span> : "" }
                    <div className="subDivInformacao">
                        <section className="sectionInformacao"> 
                            <label className="labelInformacao">Valor</label>
                            <input type="money" placeholder="R$ 00,00" onChange={handleChangeValor} value={valor} className="inputValor"/>
                        </section>
                        <section className="sectionInformacao">
                            <label className="labelInformacao">Cotar de</label>
                                <select onChange={handleChangeMoedaBase} onClick={buscaMoeda} className="select" style={mudaEstiloOne}>
                                    <option value="">Selecione uma moeda Base</option>
                                    {moedas !== undefined ? geraOption() : "" }
                                </select>
                        </section>
                        <section className="sectionInformacao">
                            <label className="labelInformacao">Para</label>
                                <select onChange={handleChangeMoedaCotacao} onClick={buscaMoeda} className="select" style={mudaEstiloTwo}> 
                                    <option value="">Selecione uma moeda Cotação</option>
                                    {moedas !== undefined ? geraOption() : "" }
                                </select>
                        </section>
                        <button onClick={converterMethod} className="buttonConverte"> Converter </button>
                    </div>
                </div>
                <div className="divResultado">
                    {msgError === "MoedaBaseSelecionado" || msgError === "MoedaBaseCotacaoSelecionado" ? 
                        <section className="sectionResultadoOne" style={{display:"flex"}}>
                            <h3 className="tagh3">Resultado da Cotação</h3>
                            <section className="sectionData" style={{display:"flex"}}>
                                <label className="labelData">Data da Cotação:  <span className="spanData">{dia}/{mes}/{ano}</span></label>
                                <label className="labelData">Horário da Cotação: <span className="spanData">{horario}:{minuto}</span></label>
                            </section>
                        </section>
                    : "" }
                    <section  className="sectionResultadoTwo">
                        {msgError === "MoedaBaseSelecionado"?  
                            <label className="moedaBase" style={{display:"flex"}}>{valor} {dadosDaRequesicao['moedaBase']} equivale a {dadosDaRequesicao['conversion_result']} BRL</label>
                         : "" }
                        {msgError === "MoedaBaseCotacaoSelecionado"?
                            <label className="moedaValor" style={{display:"flex"}}>{valor} {dadosDaRequesicao['moedaBase']} equivale a {dadosDaRequesicao['conversion_result']} {dadosDaRequesicao['moedaCotacao']} </label>
                        : "" }
                    </section>
                </div>
            </div>
        );
}
export default IndexExchange;