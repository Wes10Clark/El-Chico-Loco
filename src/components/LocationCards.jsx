import React from "react";
import { Card, Container, Col, Row, Button } from "react-bootstrap";
import Icon from "../Assets/resturant-icon.png";

const LocationCards = () => {
  return (
    <div className="pt-3 bg-dark opacity-75">
      <h3 className="text-warning text-center">Our Locations</h3>
      <Container fluid className=" d-flex justify-content-around pt-4">
        <Row>
          <Col xs={4}>
            <Card className="text-center mb-3">
              <img src={Icon} alt="resturant icon" />
              <Card.Body>
                <Card.Title>Floowood MS</Card.Title>
                <Card.Text>119 Ocean Park</Card.Text>
                <Button className="btn-danger">Get Directons</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card className="text-center mb-3">
              <img src={Icon} alt="resturant icon" />
              <Card.Body>
                <Card.Title>Oxford MS</Card.Title>
                <Card.Text>284 Rebel Park</Card.Text>
                <Button className="btn-warning">Get Directons</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card className="text-center mb-3">
              <img src={Icon} alt="resturant icon" />
              <Card.Body>
                <Card.Title>Brandon MS</Card.Title>
                <Card.Text>337 Lagoon Park</Card.Text>
                <Button className="btn-success">Get Directons</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card className="text-center mb-3">
              <img src={Icon} alt="resturant icon" />
              <Card.Body>
                <Card.Title>Stsrkville MS</Card.Title>
                <Card.Text>228 Bulldog Park</Card.Text>
                <Button className="btn-success">Get Directons</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card className="text-center mb-3">
              <img src={Icon} alt="resturant icon" />
              <Card.Body>
                <Card.Title>Jackson MS</Card.Title>
                <Card.Text>241 State Park</Card.Text>
                <Button className="btn-warning">Get Directons</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card className="text-center mb-3">
              <img src={Icon} alt="resturant icon" />
              <Card.Body>
                <Card.Title>Madison MS</Card.Title>
                <Card.Text>524 Circle Park</Card.Text>
                <Button className="btn-danger">Get Directons</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LocationCards;
