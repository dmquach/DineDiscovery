// frontend/src/components/Navigation/index.js

import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./navigation.css";
// import DemoLogin from "../DemoLogin/DemoLogin";
import SearchBar from "../SearchBar/SearchBar";
// import { Link } from "react-router-dom";
import CategorySearch from "../CategorySearch/CategorySearch";
import { useLocation } from "react-router-dom";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);
  const location = useLocation();
  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = <ProfileButton user={sessionUser} />;
  // } else {
  //   sessionLinks = (
  //     <>
  //       <NavLink className="login" to="/login">
  //         Log In
  //       </NavLink>
  //       <NavLink className="signUp" to="/signup">
  //         Sign Up
  //       </NavLink>
  //       <NavLink to="/">
  //         <DemoLogin className={"demoLogin"} string="Demo Login"/>
  //       </NavLink>
  //     </>
  //   );
  // }

  return (
    <ul className="navbar">
      <NavLink className="homeNavLink" exact to="/">
        {location.pathname === "/" ? (
          <h1 className="home">DineDiscovery</h1>
        ) : (
          <h1 className="notHome">DineDiscovery</h1>
        )}

        <i className="fa-brands fa-yelp" style={{ color: "red" }}></i>
      </NavLink>
      <SearchBar />
      <CategorySearch />
      <div className="iconLinks">
        <a
          id="fabLink1"
          href="https://github.com/dmquach/DineDiscovery"
          // target="_blank"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          id="fabLink2"
          href="https://www.linkedin.com/in/dylanmquach/"
          // target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        {sessionUser ? (
          <li>

            <ProfileButton user={sessionUser} />
          </li>
        ) : (
          <div className="sessionUser">

            <NavLink className="login" to="/login">
              Log In
            </NavLink>
            <NavLink className="signUp" to="/signup">
              Sign Up
            </NavLink>
            {/* <NavLink to="/">
              <DemoLogin className={"demoLogin"} string="Demo Login" />
            </NavLink> */}
          </div>
        )}

      </div>
    </ul>
  );
}

export default Navigation;
