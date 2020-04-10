import React from "react";
import { Link } from "react-router-dom";
import HamiltonSeal from "../../images/hamilton-seal.png"
import WenhamSeal from "../../images/wenham-seal.png"
import { useAuth0 } from "../../react-auth0-spa";
let loggedInUser;

export const Nav = props => {
  const { isAuthenticated, loginWithRedirect, logout} = useAuth0();
  if (isAuthenticated) {
    return (
      <div className="navbar-buttons">
        <ul className="navbar-nav navbar-center">
          <Link to="/">
            <li className="nav-item">
              <div className="nav-link">Help For Businesses</div>
            </li>
          </Link>
          <Link push to="/signup">
            <li className="nav-item">
              <div className="nav-link">Add your listing</div>
            </li>
          </Link>
          <Link to="/">
            <li className="nav-item">
              <div className="nav-link">Contact</div>
            </li>
          </Link>
          <Link to={"/account"}>
            <li className="nav-item">
              <div className="nav-link">My account</div>
            </li>
          </Link>
          <Link push to="/">
            <li className="nav-item">
              <div className="nav-link" href="/" onClick={() => logout()}>Logout</div>
            </li>
          </Link>
        </ul>
      </div>

    );

  } else {
    return (
      <div className="navbar-buttons">
        <ul className="navbar-nav navbar-center">
          <Link to="/">
            <li className="nav-item">
              <div className="nav-link">Help For Businesses</div>
            </li>
          </Link>
          <Link push to="/signup">
            <li className="nav-item">
              <div className="nav-link">Add your listing</div>
            </li>
          </Link>
          <Link to="/">
            <li className="nav-item">
              <div className="nav-link">Contact</div>
            </li>
          </Link>
          <Link>
          <li className="nav-item">
            <div className="nav-link" onClick={() => loginWithRedirect({})}>Login</div>
          </li>
          </Link>
        </ul>
      </div>
    )
  }

}

export const Jumbotron = props => (
  <div className="jumbotron jumbotron-fluid header">
    <div className="container">
      <Link to="/">
        <img className="hamilton-seal" alt="Hamilton Seal" href="/" src={HamiltonSeal} />
        <img className="wenham-seal" alt="Wenham Seal" href="/" src={WenhamSeal} />
      </Link>
      <h1 className="title">Virtual Hamilton-Wenham</h1>
      <p className="subhead">Serving Community – Providing Peace-of-Mind</p>
    </div>
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm bg-dark">
    </nav>
  </div>
)






