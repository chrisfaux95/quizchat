import React from "react";

function Navbar() {
    return (
        <nav class="mb-1 navbar navbar-expand-lg navbar-light quiz-page">
            <a href="./assets/images/Triviatastic.png" class="pull-left"><img src="./assets/images/Triviatastic.png"
                style="height:50px;"/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
                    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/landing">Home
            <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/hold">Quiz</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/signup">Sign Up</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/members">User Score</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/highscores">Highscore</a>
                        </li>
                    </ul>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <i class="fas fa-user"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
                            <a id="login-nav" class="dropdown-item" href="/login">Log In</a>
                            <a id="signup-nav" class="dropdown-item" href="/signup">Sign Up!</a>
                            <a id="logout-nav" class="dropdown-item" href="/logout">Logout</a>
                        </div>
                    </li>
                </div>
  </nav>

    )
}