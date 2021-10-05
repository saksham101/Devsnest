import React from "react";
import { Card, Button } from "react-bootstrap";
const CardComponent = ({ item }) => {
  return (
    <Card className="product-card">
      <Card.Img variant="top" src={item.image} className="product-img" />
      <Card.Body>
        <Card.Title className="product-title">{item.title}</Card.Title>
        <Card.Text>{item.description.slice(0, 60)}</Card.Text>
        <Card.Text style={{ fontSize: "1.2rem" }}>₹{item.price * 71}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
