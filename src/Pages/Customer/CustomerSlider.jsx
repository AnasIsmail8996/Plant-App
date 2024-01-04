import './Customer.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Container, Row, Col } from 'react-bootstrap';
import handfree from '../../assets/handfree.png';
import Person1 from '../../assets/person1.png';
import Person2 from '../../assets/person2.png';
import StarFill from '../../assets/StarFill.png';
const CustomerSlider = () => {
  return (
   <>
   <Container>
    <Row>
        <Col lg={12} md={12} sm={12}>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
      <SwiperSlide>
<div className='color-parent  col-md-12 col-sm-12'>
<div className='slider-text'>
    <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nunc vulputate libero et velit interdum,
         ac aliquet odio mattis.
          Class aptent taciti sociosqu ad litora
           torquent per conubia nostra, per inceptos himenaeos.</p>
</div>

<div className='images-slider-parent'>
    <Row>

    <Col  lg={12} >
<div className='img-one-slider'>
    <img src={handfree} alt="" />
</div>
    </Col>

<Col> 
<div className='img-two-slider'>
<img src={Person1} alt="" />
</div>
</Col>
    </Row>


<Col >
    <div className='person-name'>
  <h6>John Doe</h6>
  <p>Youtuber</p>
    </div>
</Col>
<Col  >
    <div className='rating'>
        <img src={StarFill} alt="" />
        <p>4.5</p>
    </div>
</Col>

</div>
</div>

      </SwiperSlide>
      {/* Col two */}
      <SwiperSlide>
      <div className='color-parent  col-md-12 col-sm-12'>
<div className='slider-text'>
    <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nunc vulputate libero et velit interdum,
         ac aliquet odio mattis.
          Class aptent taciti sociosqu ad litora
           torquent per conubia nostra, per inceptos himenaeos.</p>
</div>

<div className='images-slider-parent'>
    <Row>

    <Col  lg={12} >
<div className='img-one-slider'>
    <img src={handfree} alt="" />
</div>
    </Col>

<Col> 
<div className='img-two-slider'>
<img src={Person1} alt="" />
</div>
</Col>
    </Row>


<Col >
    <div className='person-name'>
  <h6>John Doe</h6>
  <p>Youtuber</p>
    </div>
</Col>
<Col  >
    <div className='rating'>
        <img src={StarFill} alt="" />
        <p>4.5</p>
    </div>
</Col>

</div>
</div>
      </SwiperSlide>
      {/* there */}
      <SwiperSlide>
      <div className='color-parent  col-md-12 col-sm-12'>
<div className='slider-text'>
    <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nunc vulputate libero et velit interdum,
         ac aliquet odio mattis.
          Class aptent taciti sociosqu ad litora
           torquent per conubia nostra, per inceptos himenaeos.</p>
</div>

<div className='images-slider-parent'>
    <Row>

    <Col  lg={12} >
<div className='img-one-slider'>
    <img src={handfree} alt="" />
</div>
    </Col>

<Col> 
<div className='img-two-slider'>
<img src={Person1} alt="" />
</div>
</Col>
    </Row>


<Col >
    <div className='person-name'>
  <h6>John Doe</h6>
  <p>Youtuber</p>
    </div>
</Col>
<Col  >
    <div className='rating'>
        <img src={StarFill} alt="" />
        <p>4.5</p>
    </div>
</Col>

</div>
</div>
      </SwiperSlide>
      {/* four */}
      <SwiperSlide>
      <div className='color-parent  col-md-12 col-sm-12'>
<div className='slider-text'>
    <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nunc vulputate libero et velit interdum,
         ac aliquet odio mattis.
          Class aptent taciti sociosqu ad litora
           torquent per conubia nostra, per inceptos himenaeos.</p>
</div>

<div className='images-slider-parent'>
    <Row>

    <Col  lg={12} >
<div className='img-one-slider'>
    <img src={handfree} alt="" />
</div>
    </Col>

<Col> 
<div className='img-two-slider'>
<img src={Person1} alt="" />
</div>
</Col>
    </Row>


<Col >
    <div className='person-name'>
  <h6>John Doe</h6>
  <p>Youtuber</p>
    </div>
</Col>
<Col  >
    <div className='rating'>
        <img src={StarFill} alt="" />
        <p>4.5</p>
    </div>
</Col>

</div>
</div>
      </SwiperSlide>

    </Swiper>
        
        </Col>
    </Row>
   </Container>
   </>
  )
}

export default CustomerSlider;
