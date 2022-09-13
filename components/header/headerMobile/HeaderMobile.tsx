import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BiSearch,BiUser} from "react-icons/bi"
import {BsHandbag} from "react-icons/bs"
import BackImg from "./logo.png";
import { useNavigate } from 'react-router-dom';

function HeaderMobile() {
  const navigate = useNavigate();

  const onlogoClicked = () =>{
    navigate('');
  };
  const onRestaurantsClicked = () =>{
    navigate('/Restaurants');
  };
  const onChefsClicked =() => {
    navigate('/chefs')
  }
    
  return (
    <Navbar  expand="lg" dir="rtl">
      <Container>
      <div>
            <Navbar.Brand ><BsHandbag/></Navbar.Brand>
            <Navbar.Brand ><BiUser/></Navbar.Brand>
            <Navbar.Brand ><BiSearch/></Navbar.Brand>
        </div>
        <div>
             <Navbar.Brand onClick={onlogoClicked}>  <img src={'EpicureLogo.svg'}/>  </Navbar.Brand>
       </div> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={onRestaurantsClicked}> Restaurants </Nav.Link>
            <Nav.Link onClick= {onChefsClicked}> Chefs </Nav.Link>
            <Nav.Link > Contact Us </Nav.Link>
            <Nav.Link > Term of Use </Nav.Link>
            <Nav.Link > Privacy Policy </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderMobile;
