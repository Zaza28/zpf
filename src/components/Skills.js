import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import htmlLogo from "../assets/img/html-logo.svg";
import cssLogo from "../assets/img/css-logo.svg";
import sassLogo from "../assets/img/sass-svgrepo-com.svg";
import jsLogo from "../assets/img/javascript-logo.svg";
import reactLogo from "../assets/img/react-svgrepo-com.svg";
import figmaLogo from "../assets/img/figma-logo.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p className="description-skill">Mes compétences techniques.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skills-slider"
              >
                <div className="item">
                  <img src={htmlLogo} alt="html-logo" className="skills-logo" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={cssLogo} alt="css-logo" className="skills-logo" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={sassLogo} alt="sass-logo" className="skills-logo" />
                  <h5>SASS</h5>
                </div>
                <div className="item">
                  <img
                    src={jsLogo}
                    alt="javascript-logo"
                    className="skills-logo"
                  />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img
                    src={reactLogo}
                    alt="react-logo"
                    className="skills-logo"
                  />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img
                    src={figmaLogo}
                    alt="figma-logo"
                    className="skills-logo"
                  />
                  <h5>Figma</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background-image"
      />
    </section>
  );
};
