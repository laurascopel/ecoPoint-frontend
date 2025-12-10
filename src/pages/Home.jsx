import "../styles/pages/Home.css";
import logo from "../assets/logo_branco.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <img src={logo} alt="EcoPoint Logo" className="home-logo" />

      <div className="home-botoes">
        <button className="botao-branco"onClick={()=>navigate("/LoginGeradora")}>Quero descartar</button>
        <button className="botao-outline"onClick={()=>navigate("/LoginColetora")}>Quero fazer a coleta</button>
      </div>
    </div>
  );
}

export default Home;
