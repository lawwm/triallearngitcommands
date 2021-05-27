import React, { useState, useRef, Fragment, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/auth/action";
import { getProfile, resetProfile } from "../store/profile/action";

import { useHistory } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./components.css";

const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const node = useRef()

  const { loading, isAuthenticated, user } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);

  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [])

  const handleClick = e => {
    // console.log(domNode)
    // if (domNode == undefined) {
    //   console.log(domNode)
    //   return
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setExpanded(false)
  };

  return (
    <div ref={node}>
      {" "}
      {loading && <></>}
      {!loading &&
        (isAuthenticated ? (
          <>
            <Navbar expanded={expanded} collapseOnSelect={true} expand="lg" className="navbar fixed-top">
              <Container>
                <Navbar.Brand className="mr-auto">ThinkSlice</Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded((prevExpanded) => (prevExpanded = !prevExpanded))} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto">
                    <NavLink
                      className="nav-default"
                      activeClassName="nav-active"
                      to="/"
                      onClick={() => setExpanded(false)}
                      exact={true}
                    >
                      Home
                  </NavLink>
                    <NavLink
                      className="nav-default"
                      activeClassName="nav-active"
                      to="/categories"
                      onClick={() => setExpanded(false)}
                    >
                      Categories
                  </NavLink>
                    <NavLink
                      className="nav-default"
                      activeClassName="nav-active"
                      to={"/profile/" + user}
                      onClick={() => setExpanded(false)}
                    >
                      Profile
                  </NavLink>
                    <NavLink
                      className="nav-default"
                      activeClassName="nav-active"
                      to="/login"
                      onClick={() => {
                        dispatch(resetProfile());
                        dispatch(logout());
                        setExpanded(false)
                      }}
                    >
                      Logout{" "}
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </>
        ) : (
          <>
            <Navbar expanded={expanded} collapseOnSelect={true} expand="lg" className="navbar fixed-top">
              <Container>
                <Navbar.Brand className="mr-auto">ThinkSlice</Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded((prevExpanded) => (prevExpanded = !prevExpanded))} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto">
                    <NavLink
                      className="nav-default"
                      activeClassName="nav-active"
                      to="/"
                      onClick={() => setExpanded(false)}
                      exact={true}
                    >
                      Home
                  </NavLink>
                    <NavLink
                      className="nav-default"
                      activeClassName="nav-active"
                      to="/categories"
                      onClick={() => setExpanded(false)}
                    >
                      Categories
                  </NavLink>
                    <NavLink
                      className="nav-default"
                      activeClassName="nav-active"
                      to="/login"
                      onClick={() => setExpanded(false)}
                    >
                      Login
                  </NavLink>
                    <NavLink
                      className="nav-default"
                      activeClassName="nav-active"
                      to="/register"
                      onClick={() => setExpanded(false)}
                    >
                      Register
                  </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </>
        ))}
    </div>
  );
};

export default NavBar;
