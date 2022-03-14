import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./MyCard.css";

const MyCard = ({ data }) => {
  return (
    <Container className="text-center mt-4 p-4">
      <Row className="d-flex justify-content-center ">
        {data.map((item) => {
          const { id, title, desc, image } = item;
          return (
            <Col
              className="d-flex justify-content-center mb-4"
              sm={12}
              md={6}
              lg={4}
              key={id}
            >
              <Card style={{ width: "40rem" }} key={id}>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                </Card.Body>
                <Card.Img variant="top" src={image} />
                <div className="text">
                  <p>{desc}</p>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MyCard;
