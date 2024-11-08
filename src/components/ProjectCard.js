import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgURL, link }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx" loading="lazy">
        <img src={imgURL} alt="image-projet" className="image-projet-bx" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <a href={link} target="new" className="lien-projet">Voir le projet</a>
        </div>
      </div>
    </Col>
  );
};
