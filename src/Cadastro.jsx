import { useState } from 'react'
import './Cadastro.css'
import { UserRound } from 'lucide-react';
import { Link } from "react-router";
import Google from './assets/google_logo_icon.png'
import Gith from './assets/github_logo_icon.png'
import Face from './assets/media_icon.png'
//import Cadastro from './Cadastro'//


function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [manterConectado, setManterConectado] = useState(false);

  
  const handleLogin = (e) => {
  e.preventDefault();
  alert(`Nome: ${nome}\nEmail: ${email}\nCPF: ${cpf}\nUsuário: ${usuario}\nSenha: ${senha}\nManter conectado: ${manterConectado}`);
};


  return (
    <>
      <div className="fundo-container"> 
        <div className="content-wrapper">
          <div className="busca-box">
            <header>
             <h1><UserRound  color="white" size={100} />
              Cadastro
             </h1>
            
           </header>
            
           <form onSubmit={handleLogin} className="formulario-login">

            <label htmlFor="nome">NOME:</label>
            <input
                type="text"
              id="nome"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            
            <label htmlFor="email">EMAIL:</label>
            <input
              type="text"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="cpf">CPF:</label>
            <input
              type="text"
              id="cpf"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />


        <div className="linha-dupla">
          <div className="campo">

            <label htmlFor="usuario">USUÁRIO:</label>
            <input
              type="text"
              id="usuario"
              placeholder="Digite seu usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className="campo">
            <label htmlFor="senha">SENHA:</label>
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          </div>


            <div className="linha-opcoes">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={manterConectado}
                  onChange={(e) => setManterConectado(e.target.checked)}
                />
                Manter conectado
              </label>
            </div>
           
            <a href="#" className="link-senha">
                esqueceu a senha?
              </a>

            <button type="submit">Cadastrar-se</button>

            <p className="logar-com">LOGAR COM</p>
            <div className="icones-login">
              <button type="button"  className="bt-social google"> <img src={Google} alt="" /> </button>
              <button type="button" className="bt-social gith"> <img src={Face} alt="" /> </button>
              <button type="button" className="bt-social face"> <img src={Gith} alt="" /> </button>
            </div>


            <p className="registrar">
              <small>
              NÃO TEM CONTA?
              <Link to="/">logar</Link>
              </small>
            </p>
          </form>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default Cadastro
