import './Categories.css';
import { Container, Row , Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import catimgOne from '../../assets/Frame36.png';
import catimgTwo from '../../assets/Frame37.png';
import catimgThere from '../../assets/Frame38.png';
import { IoIosArrowRoundForward } from "react-icons/io";
const Categories = () => {
  return (
    <>
    <div className='categories-heading mt-5 col-lg-12 col-md-12 col-sm-12'>
   <h3> Categories</h3>
   <p> Find what you are looking for</p>
    </div>


<div className='category-back mt-5  col-lg-12 col-md-12 col-sm-12 '>

<Container>
    <Row>
        <Col lg={4} md={6} sm={6}>
        <Card className='cat-card-parent'>
         <div className='cat-card-one'>
             <img src={catimgOne} alt="" />
            <h6>Natural Plants</h6>
         </div>
    </Card>
        </Col>
        {/* card two */}
        <Col  lg={4} md={6} sm={6}
        className='mt-5'>
             <Card  className='cat-card-parent'>
             <div className='cat-card-two'>
             <img src={catimgThere} alt="" />
            <h6>Natural Plants</h6>
         </div>
      <Card.Body>
       <div className='cat-card-two-para'>
        <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </div>
        
      </Card.Body>
    </Card>
        </Col>
        <Col  lg={4} md={6} sm={6}>
        <Card className='cat-card-parent'>
         <div className='cat-card-there'>
             <img src={catimgTwo} alt="" />
            <h6>Natural Plants</h6>
         </div>
    </Card>
        </Col>
    </Row>

    <Row>
        <Col lg={12} md={12} sm={12}>
            <div className='Explore-btn'>
             <button>Explore  < IoIosArrowRoundForward/></button>
            </div>
        </Col>
    </Row>
</Container>



</div>


    </>
  )
}

export default Categories;
