import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BiSearch,BiUser} from "react-icons/bi"
import {BsHandbag} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from "react-modal";
import {Title , LogIn , Close , Text } from "./style" ; 
import {GrClose} from "react-icons/gr" ; 


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
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    navigate('');
    setIsOpen(!isOpen);
  }
  function CloseModal() {
    setIsOpen(!isOpen)
  }
  
  
    
  return (

    <Navbar  expand="lg" dir="rtl">

      <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
    >
      <Close onClick={CloseModal}><GrClose/> </Close>
      <Title>Sign In</Title>
      <Text> To continue the order , please sign in </Text>

      
      

   
      <LogIn onClick={toggleModal}>LogIn </LogIn>
      
      </Modal>

      <Container>
      <div>
            <Navbar.Brand ><BsHandbag/></Navbar.Brand>
            <Navbar.Brand onClick={toggleModal} ><BiUser/></Navbar.Brand>
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
