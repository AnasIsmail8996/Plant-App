import './Customer.css';
import {  Container, Row , Col}from 'react-bootstrap'
import CustomerSlider from './CustomerSlider';
const Customer = () => {
  return (
    <>
   <Container>
    <Row className='mt-5'>
        <Col lg={12} md={12} sm={12}>
            <div className='customer-heading'>
            <h2>
            What customers say about GREEMIND?
            </h2>
                
            </div>
            </Col>
    </Row>

    <Row className='mt-5'>
        <Col lg={12} md={12} sm={12}>
        <CustomerSlider/>
        </Col>
    </Row>
   </Container>
    </>
  )
}

export default Customer