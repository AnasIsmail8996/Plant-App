import  './Nb.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { PiShoppingCartThin } from "react-icons/pi";
import { BsPersonHearts } from "react-icons/bs";
import { BsFilterRight } from "react-icons/bs";
const Nb = () => {
  return (
    <>
<Navbar collapseOnSelect expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home">
            <div className='GREENMIND'>
                <h3>GREENMIND</h3>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home" className='list-names'> Home</Nav.Link>
            <Nav.Link href="#Products" className='list-names'>Products</Nav.Link>
            <Nav.Link href="#Contacts" className='list-names'>Contacts</Nav.Link>
            
          </Nav>
          <Nav className='px-1 '>
            <div  className='list-icons'>

              <PiShoppingCartThin  className='cart-img' /> 
             <BsPersonHearts  className='person-img'/> 
             <BsFilterRight className='right-img' /> 
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
  )
}

export default Nb