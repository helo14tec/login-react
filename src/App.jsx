import { useState } from "react";
import "./App.css";
//import { CloudSunRain } from 'lucide-react';//
import { Link } from "react-router-dom";
import Google from "./assets/google_logo_icon.png";
import Gith from "./assets/github_logo_icon.png";
import Face from "./assets/media_icon.png";

function App() {
  const [usuario, setCidade] = useState("");
  const [senha, setClima] = useState("");
  const [manterConectado, ManterConectado] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    alert(
      `Usuário: ${usuario}\nSenha: ${senha}\nManter conectado: ${manterConectado}`
    );
  };

  return (
    <>
      <div className="fundo-container">
        <div className="content-wrapper">
          <div className="busca-box">
            <header>
              <h1>
                {/*<CloudSunRain color="white" size={48} />*/}
                Login
              </h1>
              <p></p>
            </header>
            <form onSubmit={handleLogin} className="formulario-login">
              <label htmlFor="usuario">USUÁRIO:</label>
              <input
                type="text"
                id="usuario"
                placeholder="Digite seu usuário"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />

              <label htmlFor="senha">SENHA:</label>
              <input
                type="password"
                id="senha"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />

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

              <button type="submit">ENTRAR</button>

              <p className="logar-com">LOGAR COM</p>
              <div className="icones-login">
                <button type="button" className="bt-social google">
                  {" "}
                  <img src={Google} alt="" />{" "}
                </button>
                <button type="button" className="bt-social gith">
                  {" "}
                  <img src={Face} alt="" />{" "}
                </button>
                <button type="button" className="bt-social face">
                  {" "}
                  <img src={Gith} alt="" />{" "}
                </button>
              </div>

              <p className="registrar">
              <small>
              NÃO TEM CONTA?
              <Link to="/Cadastro">Inscrever-se</Link>
              </small>
        
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
