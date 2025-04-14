import React, { useState } from 'react';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';

// Sample menu data
const menuItems = [
  { id: 1, name: 'Gadbad Ice Cream', description: 'A Mangalorean classic.', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Chocolate Sundae', description: 'Rich and creamy.', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Vanilla Scoop', description: 'Simple and smooth.', image: 'https://via.placeholder.com/150' },
];

function MenuPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h1>Menu</h1>

      <Form className="my-4">
        <Form.Control
          type="text"
          placeholder="Search for ice creams 🍨"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>

      <Row>
        {filteredItems.map((item) => (
          <Col key={item.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {filteredItems.length === 0 && (
        <p className="text-muted">No items match your search.</p>
      )}
    </Container>
  );
}

export default MenuPage;
