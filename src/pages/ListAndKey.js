import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import ProductData from '../dummyData/product';

export default function ListAndKey() {
  console.log(ProductData);
  return (
    <Container className="py-5">
      <Row>
        {ProductData.map((product, index) => (
          <Col sm={3} key={index}>
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.desc}</Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
