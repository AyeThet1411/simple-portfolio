import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function ProjectCard({ title, imgUrl, link }) {
  return (
    <Col size={12} sm={6} md={4}>
      <Card style={{ width: "18rem", marginBottom: "15px", padding: "10px" }}>
        <Card.Header>{title}</Card.Header>
        <Card.Img src={imgUrl} />
        <Card.Link href={link} style={{ padding: "10px" }}>
          Visit My Project
        </Card.Link>
      </Card>
    </Col>
  );
}
export default ProjectCard;
