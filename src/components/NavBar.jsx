import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bplogo from '../assets/BP-White-Transparent.png'
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IconContext } from "react-icons";


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home')
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
      const onScroll = () => {
        if(window.scrollY > 50)
            setIsScrolled(true)
        else
            setIsScrolled(false)
      }

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll)
    }, [])
    

  return (
    <Navbar expand="lg" className={isScrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={bplogo} alt="bp-icon"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#jobs" className={activeLink === 'jobs' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('jobs')}>Job History</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icons">
                <a href="mailto:benjnp@gmail.com" target="_blank">
                <IconContext.Provider value={{ color: "white", className: 'social-each-icon' }}>
                    <FaEnvelope />
                </IconContext.Provider>
                </a>
                <a href="https://github.com/benjnp" target="_blank">
                <IconContext.Provider value={{ color: "white", className: 'social-each-icon' }}>
                    <FaGithub />
                </IconContext.Provider>
                </a>
                <a href="https://www.linkedin.com/in/benjnp/" target="_blank">
                <IconContext.Provider value={{ color: "white", className: 'social-each-icon' }}>
                    <FaLinkedin />
                </IconContext.Provider>
                </a>
            </div>
            <a className="contact-button" href="#contact"><button>Contact Me</button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar