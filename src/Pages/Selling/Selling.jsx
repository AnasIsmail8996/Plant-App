import './Selling.css';
import { Container, Row, Col } from 'react-bootstrap';
import { IoIosArrowRoundForward } from "react-icons/io";
import cardimfOne from '../../assets/Frame7.png';
import cardimfTwo from '../../assets/Frame8.png';
import cardimfThere from '../../assets/Frame9.png';
import Card from 'react-bootstrap/Card';
const Selling = () => {
  return (
    <>
 <Container>
    <Row className='mt-5'>
            <Col  lg={3} md={6} sm={6} className='mt-5'  >
                <div className='B-Sell-parent'>
                    <h2>Best Selling Plants</h2>
                    <p> Easiest way to healthy life by buying your favorite plants </p>
                    <button>See more <IoIosArrowRoundForward  />  </button>
                </div>
            </Col>

            {/* two */}
            <Col lg={3} md={6} sm={6} className='mt-5'>
            <Card className='card-parent'>
                  <div className='card-two'>
                    <img src={cardimfOne} alt="" />
                  </div>
     <Card.Body>
       <Card.Title className='card-t'>Natural Plants</Card.Title>
       <Card.Text className='card-tex'>
       ₱ 1,400.00
       </Card.Text>
       
     </Card.Body>
   </Card>
            </Col>
            {/* card there */}
            <Col  lg={3} md={6} sm={6} className='mt-5'>
            <Card className='card-parent'>
               <div className='card-there'> 
                            <img src={cardimfTwo} alt="" />
               </div>
      <Card.Body>
        <Card.Title className='card-t'>Artificial Plants</Card.Title>
        <Card.Text className='card-tex'>
        ₱ 900.00
        </Card.Text>
        
      </Card.Body>
    </Card>
            </Col>
            <Col  lg={3} md={6} sm={6} className='mt-5'>
            <Card className='card-parent'>
               <div className='card-four'> 
                            <img src={cardimfThere} alt="" />
               </div>
      <Card.Body>
        <Card.Title className='card-t'>Artificial Plants</Card.Title>
        <Card.Text className='card-tex'>
        ₱ 900.00
        </Card.Text>
        
      </Card.Body>
    </Card>
            </Col>
    </Row>
 </Container>
    </>
  )
}

export default Selling;