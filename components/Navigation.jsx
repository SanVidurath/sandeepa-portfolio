import React, { useState } from 'react';

import { greetings, sections } from '../portfolio';
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

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main fixed-top"
          expand="lg"
          id="navbar-main"
          style={{backgroundColor: "#142c4c",height: "8%"}}
        >
          <Container>
            <NavbarBrand className="mr-lg-5" style={{cursor: "default"}}>
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
