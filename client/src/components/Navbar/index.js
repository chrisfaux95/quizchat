import React from "react";
import { Nav } from "reactstrap";

function Navigation() {
    return (
        <nav  className="mb-1 navbar navbar-expand-lg navbar-light quiz-page">
            <a href="./assets/images/Triviatastic.png"  className="pull-left"><img src="./assets/images/Triviatastic.png"
                style="height:50px;"/></a>
                <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
                    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
                    <span  className="navbar-toggler-icon"></span>
                </button>
                <div  className="collapse navbar-collapse" id="navbarSupportedContent-555">
                    <ul  className="navbar-nav mr-auto">
                        <li  className="nav-item active">
                            <a  className="nav-link" href="/landing">Home
            <span  className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li  className="nav-item">
                            <a  className="nav-link" href="/hold">Quiz</a>
                        </li>
                        <li  className="nav-item">
                            <a  className="nav-link" href="/signup">Sign Up</a>
                        </li>
                        <li  className="nav-item">
                            <a  className="nav-link" href="/login">Login</a>
                        </li>
                        <li  className="nav-item">
                            <a  className="nav-link" href="/members">User Score</a>
                        </li>
                        <li  className="nav-item">
                            <a  className="nav-link" href="/highscores">Highscore</a>
                        </li>
                    </ul>
                    <li  className="nav-item dropdown">
                        <a  className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <i  className="fas fa-user"></i>
                        </a>
                        <div  className="dropdown-menu dropdown-menu-right dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
                            <a id="login-nav"  className="dropdown-item" href="/login">Log In</a>
                            <a id="signup-nav"  className="dropdown-item" href="/signup">Sign Up!</a>
                            <a id="logout-nav"  className="dropdown-item" href="/logout">Logout</a>
                        </div>
                    </li>
                </div>
  </nav>

    )
}

export default Navigation;