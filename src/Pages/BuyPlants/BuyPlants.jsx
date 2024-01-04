import './BuyPlants.css';
import { Container, Row, Col } from 'react-bootstrap';
import { GoSearch } from "react-icons/go";
import imgFirst from '../../assets/img-f.svg';
import imgSec from '../../assets/img-sec.svg';
import handimg from '../../assets/unsplash_cLaaxa.png';
const BuyPlants = () => {
  return (
    <>
    <Container className='buy-container'>
        <Row>
            <Col lg={5} md={6} sm={12}  >
             <div className='buy-parent'>
                <div className='heading'>
                <h1>Buy your dream plants</h1>
                </div>
                    
                    <div className='plant-customer-parent'>

                    <div className='PlantSpecies'>
                     <p><span> 50+ </span> </p>
                     <p>Plant Species</p>
                    </div>
                      
                      <div className='h-line'></div>
                   <div className='Customers'>
                   <p><span> 100+ </span> </p>
                     <p>Customers</p>
                   </div>
                  </div>

                  <div className='input-buy'>
                    <input type="text" placeholder='What are you looking for?' />
                  </div>
                  <div className='icon-search'>
                 <button>    <GoSearch  className='icon-search-img'/>  </button>   
                  </div>
                    </div>
            
            </Col>

            <Col lg={7} md={6} sm={12}  >
                <Row>

            <Col  lg={3} >
                <div className='f-img'>
                    <img src={imgFirst} alt="" />
                </div>
            </Col>
            <Col  lg={6}>
                <div className='back-color-img'>
                    <img src={handimg} alt="" />
                </div>
            </Col>
            <Col  lg={3}> 
            <div className='img-sec'>
                <img src={imgSec} alt="" />
            </div>
            </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default BuyPlants;
