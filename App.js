// App.js
import React from 'react';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import React-Bootstrap components
import { Navbar, Nav, Container, Card, Row, Col } from 'react-bootstrap';

function App() {
  return (
    // React Fragment (<> ... </>) to group elements without an extra DOM node
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">My First React App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Heading inside the main container */}
        <Container className="my-4"> {/* 'my-4' adds margin on the Y-axis */}
          <h1>Welcome to React-Bootstrap</h1>
          <p>This is a simple hero unit styled with Bootstrap.</p>

          {/* Cards using a Grid Row */}
          <Row>
            {/* Column for Card 1 */}
            <Col md={4} className="mb-3"> {/* 'mb-3' adds margin at the bottom */}
              <Card>
                <Card.Body>
                  <Card.Title>Card One</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Column for Card 2 */}
            <Col md={4} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>Card Two</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Column for Card 3 */}
            <Col md={4} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>Card Three</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
