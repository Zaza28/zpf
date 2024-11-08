import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({ message: "", success: null });

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.phone || !formDetails.message) {
        setStatus({ message: "Veuillez remplir tous les champs.", success: false });
        return;
      }

    setButtonText("Envoie...");
    setStatus({ message: "", success: null });

    try {
      const response = await fetch("https://formspree.io/f/mldebbjv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      });

      if (response.ok) {
        setButtonText("Envoyé");
        setStatus({ message: "Message envoyé avec succès !", success: true });
           
        setTimeout(() => {
            setFormDetails(formInitialDetails);
            setStatus({ message: "", success: null }); 
          }, 3000);
      } else {
        setButtonText("Réessayer");
        setStatus({ message: "Échec de l'envoi du message.", success: false });
        setFormDetails(formInitialDetails);
     
    }
    } catch (error) {
      setButtonText("Réessayer");
      setStatus({ message: "Une erreur s'est produite.", success: false });
      setFormDetails(formInitialDetails);
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={6}>
            <h2>Let's Connect</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="half-width-col">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="Prénom"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="half-width-col">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Nom"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="half-width-col">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Adresse mail"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="half-width-col">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Numéro de téléphone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col className="full-width-col">
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={status.success === false ? "error" : "success"}
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
