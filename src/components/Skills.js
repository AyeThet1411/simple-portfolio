import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import _ from "lodash";
import colorSharp from "../assets/img/color-sharp.png";

//circular progress bar with separator
function Separator(props) {
  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        transform: `rotate(${props.turns}turn)`,
      }}
    >
      <div style={props.style} />
    </div>
  );
}
function RadialSeparators(props) {
  const turns = 1 / props.count;
  return _.range(props.count).map((index) => (
    <Separator turns={index * turns} style={props.style} />
  ));
}

function Skills() {
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
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>---------</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="progress-bar">
                  <CircularProgressbarWithChildren
                    value={100}
                    text={`${100}%`}
                    strokeWidth={10}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      pathColor: "#a1eafb",
                      trailColor: "#fcb1b1",
                      textColor: "#fff",
                    })}
                  >
                    <RadialSeparators
                      count={12}
                      style={{
                        background: "#fff",
                        width: "2px",
                        height: `${10}%`,
                      }}
                    />
                  </CircularProgressbarWithChildren>
                  <h5>HTML and CSS</h5>
                </div>
                <div className="progress-bar">
                  <CircularProgressbarWithChildren
                    value={80}
                    text={`${80}%`}
                    strokeWidth={10}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      pathColor: "#a1eafb",
                      trailColor: "#fcb1b1",
                      textColor: "#fff",
                    })}
                  >
                    <RadialSeparators
                      count={12}
                      style={{
                        background: "#fff",
                        width: "2px",
                        height: `${10}%`,
                      }}
                    />
                  </CircularProgressbarWithChildren>
                  <h5>Javascript</h5>
                </div>
                <div className="progress-bar">
                  <CircularProgressbarWithChildren
                    value={70}
                    text={`${70}%`}
                    strokeWidth={10}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      pathColor: "#a1eafb",
                      trailColor: "#fcb1b1",
                      textColor: "#fff",
                    })}
                  >
                    <RadialSeparators
                      count={12}
                      style={{
                        background: "#fff",
                        width: "2px",
                        height: `${10}%`,
                      }}
                    />
                  </CircularProgressbarWithChildren>
                  <h5>React</h5>
                </div>
                <div className="progress-bar">
                  <CircularProgressbarWithChildren
                    value={50}
                    text={`${50}%`}
                    strokeWidth={10}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      pathColor: "#a1eafb",
                      trailColor: "#fcb1b1",
                      textColor: "#fff",
                    })}
                  >
                    <RadialSeparators
                      count={12}
                      style={{
                        background: "#fff",
                        width: "2px",
                        height: `${10}%`,
                      }}
                    />
                  </CircularProgressbarWithChildren>
                  <h5>Node JS</h5>
                </div>
                <div className="progress-bar">
                  <CircularProgressbarWithChildren
                    value={50}
                    text={`${50}%`}
                    strokeWidth={10}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      pathColor: "#a1eafb",
                      trailColor: "#fcb1b1",
                      textColor: "#fff",
                    })}
                  >
                    <RadialSeparators
                      count={12}
                      style={{
                        background: "#fff",
                        width: "2px",
                        height: `${10}%`,
                      }}
                    />
                  </CircularProgressbarWithChildren>
                  <h5>MongoDB</h5>
                </div>
                <div className="progress-bar">
                  <CircularProgressbarWithChildren
                    value={90}
                    text={`${90}%`}
                    strokeWidth={10}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      pathColor: "#a1eafb",
                      trailColor: "#fcb1b1",
                      textColor: "#fff",
                    })}
                  >
                    <RadialSeparators
                      count={12}
                      style={{
                        background: "#fff",
                        width: "2px",
                        height: `${10}%`,
                      }}
                    />
                  </CircularProgressbarWithChildren>
                  <h5>Bootstrap</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-left" />
    </section>
  );
}

export default Skills;
