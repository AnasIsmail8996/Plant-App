import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <div className='Footer-back-color col-lg-12 col-md-12 col-sm-12 '>
 <Container>
  <Row>
<Col  lg={6} md={3} sm={4}>
<div className='f-f-column'>
<h6>GREENMIND </h6>
<p>We help you find your dream plant</p>
<div className='f-f-cilumn-icons'>
<CiFacebook className='f-f-cilumn-icons-img' />
<FaInstagram className='f-f-cilumn-icons-img'/>
<CiTwitter className='f-f-cilumn-icons-img'/>
</div>
</div>

</Col>
{/* Information */}
<Col   lg={2} md={3} sm={4} >
  <div className='Information'>
    <h4>Information</h4>
    <p>About</p>
    <p>Product</p>
    <p>Blog</p>
  </div>
</Col>
{/* Company */}
<Col   lg={2} md={3} sm={4}>
<div className='Company'>
<h4>Company</h4>
    <p>Community</p>
    <p>Career</p>
    <p>Our story</p>
</div>
</Col>
{/* Contact */}
<Col  lg={2} md={3} sm={4}>
<div className='Contact'>
<h4>Contact</h4>
    <p>Getting Started</p>
    <p>Pricing</p>
    <p>Resources</p>
</div>
</Col>
  </Row>

  <Row>
    <Col lg={12} md={12} sm={12}>
      <div className='developer'>
          <h4>made by anas-ismail</h4>
      </div>
    </Col>
  </Row>
 </Container>

    </div>
    </>
  )
}

export default Footer;