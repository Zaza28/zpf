import {
  Container,
  Row,
  Col,
  TabContainer,
  TabContent,
  TabPane,
  Nav,
} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/projet-img.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/projet-img6.png";

export const Projects = () => {
  const projects = [
    {
      title: "Booki",
      description: "Création de la page d'accueil de l'agence de voyage Booki",
      imgURL: projImg1,
    },
    {
      title: "OhMyFood",
      description: "Amélioration de l'interface du site mobile OhMyFood avec des animations",
      imgURL: projImg2,
      link: "https://zaza28.github.io/ProjetAnimation4/",
    },
    {
      title: "Nina Carducci",
      description: "Optimisation du référencement du site de la photographe Nina Carducci",
      imgURL: projImg3,
      link: "https://zaza28.github.io/ninacarducci/",
    },
    {
      title: "Kasa",
      description: "Création de l'application web de location immobilière Kasa avec React",
      imgURL: projImg4,
      link: "https://github.com/Zaza28/Projet8",
    },
    {
      title: "Argent Bank",
      description: "Implémentation du front-end de l'application bancaire Argent Bank avec React et Redux",
      imgURL: projImg5,
      link:"https://github.com/Zaza28/Projet11",
    },
    {
      title: "Sophie Bluel",
      description: "Création d'une page web dynamique pour le site internet d'une architecte d'intérieur Sophie Bluel",
      imgURL: projImg6,
      link:"https://github.com/Zaza28/Projet6b",
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first"><h2>Projects</h2>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <p>Mes projets de développement front-end.</p>
              <TabContent>
                <TabPane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
