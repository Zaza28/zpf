import { Container, Col, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header-img.svg";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>Bonjour, je suis Zaïneb développeuse Web.</h1>
            <p>
              Bonjour et bienvenue sur mon portfolio ! Passionnée par
              l’informatique et naturellement créative, j’ai d’abord exploré le
              domaine des langues avec une licence en Langues Étrangères
              Appliquées (arabe-anglais) avant de trouver ma voie dans le
              développement web. Après une formation intensive en front-end, qui
              m’a permis de réaliser des projets concrets et d’acquérir des
              compétences essentielles, je suis prête à mettre ces connaissances
              en pratique dans une alternance pour continuer d’évoluer. Mon
              objectif : exceller en front-end tout en élargissant mes
              compétences en back-end, afin d’apporter une vraie valeur ajoutée
              en développement web.
            </p>
            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Let's connect
              <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={5} xl={5} className="img-banner-container">
            <img src={HeaderImg} alt="Header img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
