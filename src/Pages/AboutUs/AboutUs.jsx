import './AboutUs.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { PiPottedPlant } from "react-icons/pi";
import { TiShoppingBag } from "react-icons/ti";
import { BsTelephoneOutbound } from "react-icons/bs";
const AboutUs = () => {
  return (
    <>
    <Container>
        <Row className='mt-5'>
            <Col lg={12} md={12} sm={12}>
                <div className='about-us'>
                    <h3>About us</h3>
                    <p>Order now and appreciate the beauty of nature</p>
                </div>
            </Col>
        </Row>

        <Row className='mt-5'>
            <Col  lg={4} md={6} sm={6}>
            <Card className='ab-us-parent'>
                      <div className='ab-us-card-one'>
                      <PiPottedPlant  className='card-img-icon'/>
                      </div>
      <Card.Body>
        <div className='ab-us-text'>
            <h5>Large Assortment</h5>
            <p> we offer many different types of products with fewer variations in each category.</p>
        </div>
      </Card.Body>
    </Card>
            </Col>
            <Col  lg={4} md={6} sm={6}>
            <Card className='ab-us-parent'>
                      <div className='ab-us-card-two'>
                      <TiShoppingBag  className='card-img-icon'/>
                      </div>
      <Card.Body>
        <div className='ab-us-text-two'>
            <h5>Fast & Free Shipping</h5>
            <p> 4-day or less delivery time, free shipping and an expedited delivery option.</p>
        </div>
      </Card.Body>
    </Card>
            </Col>
            {/* card there */}
            <Col  lg={4} md={6} sm={6}>
            <Card className='ab-us-parent'>
                      <div className='ab-us-card-there'>
                      <BsTelephoneOutbound  className='card-img-icon'/>
                      </div>
      <Card.Body>
        <div className='ab-us-text-there'>
            <h5>24/7 Support</h5>
            <p> answers to any business related inquiry 24/7 and in real-time.</p>
        </div>
      </Card.Body>
    </Card>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default AboutUs;