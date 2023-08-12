import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter , Outlet, Route , Routes} from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "../App";
import Dashboard from "../App2";
import SideBar from "./SideBar/SideBar";
import Body from "./Body/Body";
import Profile from "./Profile/Profile";
import Project from "./Project/Project";
import Achievement from "./Achievement/Achievement";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
     {/* <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="Dashboard" element={<Dashboard/>}>
                  <Route path="SideBar" element={<SideBar/>}>
                    <Route path="Body" element={<Body/>}/>
                    <Route path="Profile" element={<Profile/>}/>
                    <Route path="Project" element={<Project/>}/>
                    <Route path="Achievement" element={<Achievement/>}/>
                  </Route>
                </Route>
            </Routes>    
      </BrowserRouter> */}
    <BrowserRouter>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "project"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("project")}
              >
                Team
              </Nav.Link>
              <Link to="/Dashboard">
                Dashboard
              </Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>LogIn</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </BrowserRouter>
    </>
  );
};
