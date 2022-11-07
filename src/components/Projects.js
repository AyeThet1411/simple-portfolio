import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorsharp from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-1.png";
import projImg2 from "../assets/img/project-2.png";
import projImg3 from "../assets/img/project-3.png";
import projImg4 from "../assets/img/project-4.png";
import projImg5 from "../assets/img/project-5.png";
import TrackVisibility from "react-on-screen";

function Projects() {
  const projects = [
    {
      title: "Goal Library",
      imgUrl: projImg1,
      link: "https://ayethet1411.github.io/happyBakery/",
    },
    {
      title: "Happy Bakery",
      imgUrl: projImg2,
      link: "https://ayethet1411.github.io/happyBakery/",
    },
    {
      title: "Holo Travel Blog",
      imgUrl: projImg3,
      link: "https://ayethet1411.github.io/holo.github.io/",
    },
    {
      title: "Simple Expenses",
      imgUrl: projImg4,
      link: "https://ayethet1411.github.io/simple-expenses-manger/",
    },
    {
      title: "Solo",
      imgUrl: projImg5,
      link: "https://ayethet1411.github.io/Solo/",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate_animated animate_bounce" : ""}
                >
                  <h2>Projects</h2>
                  <p>lorem</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">lorem</Tab.Pane>
                <Tab.Pane eventKey="second">lorem</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorsharp} className="background-image-right" />
    </section>
  );
}

export default Projects;
