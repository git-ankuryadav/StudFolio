import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import mehulImg from "../assets/img/mehul.webp";
import sakshiImg from "../assets/img/sakshi.webp";
import lakshImg from "../assets/img/laksh.webp";
import ankurImg from "../assets/img/ankur.webp";
import armaanImg from "../assets/img/arman sir.webp";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Ankur Yadav",
      description: "Mathematics & Computing",
      imgUrl: ankurImg,
    },
    {
      title: "Sakshi Gothwal",
      description: "Computer Science & Engineering ",
      imgUrl: sakshiImg,
    },
    {
      title: "Laksh Bhandari",
      description: "Mathematics & Computing",
      imgUrl: lakshImg,
    },

    {
      title: "Mehul Aggarwal",
      description: "Mentor",
      imgUrl: mehulImg,
    },

    {
      title: "Armaan Shukla",
      description: "Mentor",
      imgUrl: armaanImg,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Our Team</h2>
                  <p>
                    With the guidance of our mentors Mehul Aggarwal and Arman
                    Shukla, we have built this project with a single purpose :
                    to help students in tracking and recording their
                    extracurricular activities.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
