import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid>
        {/* Hero Banner Section */}
        <Row className="hero-banner mb-5">
          <Col>
            <Carousel prevLabel="Previous" nextLabel="Next">
              {/* Slide 1 */}
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="icecream1.png" // Replace with your image URL
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Award-winning Ice Cream</h3>
                  <p>Experience the best ice cream with unique and tasty flavors!</p>
                </Carousel.Caption>
              </Carousel.Item>
              {/* Slide 2 */}
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="icecream2.png" // Replace with your image URL
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Delicious Flavors</h3>
                  <p>Indulge in our creative and mouth-watering flavors!</p>
                </Carousel.Caption>
              </Carousel.Item>
              {/* Slide 3 */}
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="icecream3.png" // Replace with your image URL
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Refreshing Treats</h3>
                  <p>Cool off with a variety of refreshing ice cream desserts.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        {/* Popular Dishes Section */}
        <Row className="popular-dishes mb-5">
          <Col>
            <h2>Popular Dishes</h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
              {/* Gadbad Ice Cream Card */}
              <Col>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/300x200?text=Gadbad+Ice+Cream" />
                  <Card.Body>
                    <Card.Title>Gadbad Ice Cream</Card.Title>
                    <Card.Text>
                      A delightful mix of ice cream, fruits, and toppings – a true crowd-pleaser.
                    </Card.Text>
                    <Button className="custom-btn">Order Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              {/* Chocolate Fudge */}
              <Col>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/300x200?text=Chocolate+Fudge" />
                  <Card.Body>
                    <Card.Title>Chocolate Fudge</Card.Title>
                    <Card.Text>
                      Rich, creamy chocolate fudge ice cream – perfect for chocolate lovers.
                    </Card.Text>
                    <Button className="custom-btn">Order Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              {/* Vanilla Delight */}
              <Col>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/300x200?text=Vanilla+Delight" />
                  <Card.Body>
                    <Card.Title>Vanilla Delight</Card.Title>
                    <Card.Text>
                      A smooth and rich vanilla flavor, made with real vanilla beans.
                    </Card.Text>
                    <Button className="custom-btn">Order Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Customer Testimonials Section */}
        <Row className="customer-testimonials mb-5">
          <Col>
            <h2>Customer Testimonials</h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
              {/* Testimonial 1 */}
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Text>"The best ice cream I've ever tasted! Highly recommend."</Card.Text>
                    <Card.Footer>
                      <small className="text-muted">- Jane Doe, 5 Stars</small>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
              {/* Testimonial 2 */}
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Text>"Amazing flavors and top-notch quality. I'm coming back for more!"</Card.Text>
                    <Card.Footer>
                      <small className="text-muted">- John Smith, 5 Stars</small>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
              {/* Testimonial 3 */}
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Text>"Such a fun experience with delicious ice cream. Highly recommend to anyone!"</Card.Text>
                    <Card.Footer>
                      <small className="text-muted">- Mary Johnson, 5 Stars</small>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Exclusive Offers Section */}
        <Row className="exclusive-offers mb-5">
          <Col>
            <h2>Exclusive Offers</h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
              {/* Happy Hours Offer */}
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Happy Hours</Card.Title>
                    <Card.Text>
                      Enjoy a 10% discount on all ice cream orders between 3 PM and 5 PM.
                    </Card.Text>
                    <Button className="custom-btn">Claim Offer</Button>
                  </Card.Body>
                </Card>
              </Col>
              {/* Seasonal Special Offer */}
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Seasonal Special</Card.Title>
                    <Card.Text>
                      Try our limited-time seasonal flavors with a 15% discount this summer!
                    </Card.Text>
                    <Button className="custom-btn">Claim Offer</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
