import React, { useState, useEffect } from 'react';
import { greetings, sections } from '../portfolio';
import Headroom from 'headroom.js';
import { Link } from 'react-scroll';
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap';

const Navigation = () => {
  const [collapseClasses, setCollapseClasses] = useState('');
  const onExiting = () => setCollapseClasses('collapsing-out');

  const onExited = () => setCollapseClasses('');

  useEffect(() => {
    let headroom = new Headroom(document.getElementById('navbar-main'));
    // initialise
    headroom.init();
  });

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand style={{cursor: "default"}} className="mr-lg-5">
              <h2 className="text-white" id="nav-title">
                {greetings.name}
              </h2>
            </NavbarBrand>
            <button
              className="navbar-toggler"
              aria-label="navbar_toggle"
              id="navbar_global"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <h3 className="text-black" id="nav-title">
                      {greetings.name}
                    </h3>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                {sections.map((section, i) => {
                  return <NavItem key={i}>
                    <Link
                      activeClass="active"
                      to={section.name}
                      spy={true}
                      smooth
                    >
                      <NavLink
                        className="nav-link-icon text-white"
                        href={section.name}
                      >
                        <i className={section.icon}></i>
                      </NavLink>
                    </Link>
                  </NavItem>
                })}
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
