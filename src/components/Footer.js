import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import MailchimupForm from "./MailchimupForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimupForm />
          <Col sm={2}>
            <h2 className="logo">Aye</h2>
          </Col>
          <Col sm={10} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="">
                <img src={navIcon1} />
              </a>
              <a href="">
                <img src={navIcon2} />
              </a>
              <a href="">
                <img src={navIcon3} />
              </a>
            </div>
            <p>CopyRight 2022 All Right Deserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
