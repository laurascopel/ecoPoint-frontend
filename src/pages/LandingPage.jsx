import { useNavigate } from "react-router-dom";
import "../styles/pages/LandingPage.css";
import logo from "../assets/logo.svg";
import ilustracao1 from "../assets/ilustracao1.svg";
import ilustracao2 from "../assets/ilustracao2.svg";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { PiCertificateFill } from "react-icons/pi";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <main className="home">
         <header className="header">
        <div className="container header-content">
          <img src={logo} alt="Logo" className="logo" />

          <nav>
            <ul>
              <li><a href="/home">FAÇA LOGIN/CADASTRE-SE</a></li>
            </ul>
          </nav>
        </div>
      </header>
       
      {/* ====================== SECTION 1 ======================= */}
      <section className="hero-section">
        <div className="container hero-content">

          {/* LEFT */}
          <div className="hero-text">
            <h1>Descarte de resíduos<br />simplificado e seguro<br />para sua empresa</h1>
            <div className="divider-green"></div>
            <p className="subtitle">
              Conecte-se com empresas coletoras<br />
              certificadas, acompanhe todo o processo<br />
              e emita certificados oficiais com apenas<br />
              alguns cliques.
            </p>

            <button className="btn-primary" onClick={()=>navigate("/home")}>Acessar a plataforma</button>

            <p className="small-green">
              O EcoPoint é uma plataforma completa que ajuda<br />
              empresas a gerenciar o descarte correto de resíduos.<br />
              Com nosso sistema, você pode:
            </p>
          </div>

          {/* RIGHT — GLOBO */}
          <div className="hero-image">
            <img src={ilustracao1} alt="Globo" />
          </div>
        </div>
      </section>

      {/* ====================== SECTION 2 (CARDS) ======================= */}
      <section className="cards-section">
        <div className="container cards-grid">

          <div className="card-home">
            <MdAssignmentTurnedIn className="icon" />
            <h3>Registrar Resíduos</h3>
            <p>Controle e comprovação do descarte</p>
          </div>

          <div className="card-home">
            <FaTruck className="icon" />
            <h3>Conectar Coletoras</h3>
            <p>Empresas certificadas à sua disposição</p>
          </div>

          <div className="card-home">
            <RiCalendarScheduleFill className="icon" />
            <h3>Agendar Coletas</h3>
            <p>Processo simples e confirmado</p>
          </div>

          <div className="card-home">
            <PiCertificateFill className="icon" />
            <h3>Emitir Certificados</h3>
            <p>Documentos oficiais rápidos e seguros</p>
          </div>

        </div>
      </section>

      {/* ====================== SECTION 3 (BLOCO VERDE + MULHER) ======================= */}
      <section className="info-section">

        {/* RETÂNGULO VERDE */}
        <div className="info-green">
          <div className="info-green-content">
            <h2>Evite problemas e<br />seja sustentável</h2>

            <div className="divider"></div>

            <p className="info-text">
              Gerencie o descarte de resíduos de forma simples, segura e digital.
              Com o EcoPoint, sua empresa garante conformidade ambiental e
              ainda demonstra práticas sustentáveis para o meio ambiente.
            </p>

            <p className="info-bold">
              Comece hoje mesmo e transforme<br />
              o descarte em uma vantagem para<br />
              sua empresa.
            </p>

            <button className="btn-white" onClick={()=>navigate("/home")}>Acessar a plataforma</button>
          </div>
        </div>

        {/* IMAGEM DA MULHER */}
        <div className="info-illustration">
          <img src={ilustracao2} alt="Ilustração mulher" />
        </div>
      </section>

    </main>
  );
}

export default LandingPage;