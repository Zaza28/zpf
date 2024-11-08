import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/ZAÏNEB-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub);

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="">
          <Col sm={6} className="logo-footer">
            <img src={logo} alt="logo"></img>
          </Col>
          <Col sm={6} className="text-center text-sm-end footer-info">
            <div className="icon-footer social-icon ">
              <a
                href="https://www.linkedin.com/in/za%C3%AFneb-h-414b02273/"
                target="new"
              >
                <img src={navIcon1} alt="lien linkedin" />
              </a>
              <a href="https://github.com/Zaza28" target="new">
                <FontAwesomeIcon icon={faGithub} style={{ color: "#fafafa" }} />
              </a>
            </div>
            <p>CopyRight 2024. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
