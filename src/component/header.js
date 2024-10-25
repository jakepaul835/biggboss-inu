import React, { useEffect } from 'react';
import $ from 'jquery';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logoimg from '../../src/images/footer-logo.png';

export default function Header() {
  useEffect(() => {
    // Function to add class on scroll
    const handleScroll = () => {
      if ($(window).scrollTop() > 50) {
        $('.main-header').addClass('scrolled');
      } else {
        $('.main-header').removeClass('scrolled');
      }
    };

    // Attach the scroll event listener
    $(window).on('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      $(window).off('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className='main-header'>
        <Navbar expand="lg" className="">
          <Container>
            <Navbar.Brand href="/home" className='d-lg-none d-block'><img src={logoimg} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav justify-content-center">
              <Nav className="mx-auto">
                <Nav.Link className='mx-3' href="/banner">Home</Nav.Link>
                <Nav.Link className='mx-3' href="/about">About</Nav.Link>
                <Nav.Link className='mx-3' href="/howtobuy">How to Buy</Nav.Link>
                <Nav.Link className='mx-3' href="/tokenomics">Tokenomics</Nav.Link>
                <Nav.Link className='mx-3' href="/roadmap">Roadmap</Nav.Link>
                <Button href="/link" variant="primary">Buy Now</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
