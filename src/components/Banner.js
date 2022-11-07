import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";

import "animate.css";
function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const rotateTitle = ["Web developer", "Programmer"];
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [text, setText] = useState("");
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % rotateTitle.length;
    let fullText = rotateTitle[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate_animated animate_fadeIn" : ""}
              >
                <span className="tagline">Welcome to my porfolio</span>
                <h1>
                  {`I'm Aye Thet Su Khaing`}
                  <br />
                  <span>{text}</span>
                </h1>
                <button>
                  <a href="../resume/resume.pdf" download>
                    Download Resume
                  </a>
                  <ArrowDownCircle size={25} />
                </button>
              </div>
            )}
          </TrackVisibility>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
