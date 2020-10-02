import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from "react-router-dom";
import SecureRoute from './components/SecureRoute';
import Navigation from "./components/Navbar";
import Login from "./components/Chat/Login/Login";
import RoomList from "./components/Chat/RoomList";
import AddRoom from "./components/Chat/AddRoom";
import ChatRoom from "./components/Chat/ChatRoom";
import QuizPg from "./pages/Quiz";
import HighScoresPg from "./pages/HighScores";
import NoMatch from './pages/NoMatch';
import Tgame from "./tictactoe/index";
import Minesweeper from "./minesweeper/index";
import Sodoku from "./sodoku/index";
import Status from "./components/Chat/Status"

export default function App() {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/quiz">
                    <QuizPg />
                </Route>
                <Route path="/highscores">
                    <HighScoresPg />
                </Route>
                <Route path="/minesweeper">
                    <Minesweeper />
                </Route>
                <Route path="/sodoku">
                    <Sodoku />
                </Route>
                <Route path="/tictactoe">
                    <Tgame />
                </Route>
                <SecureRoute path="/roomlist">
                    <RoomList />
                </SecureRoute>
                {/* <SecureRoute path="/addroom">
            <AddRoom />
          </SecureRoute> */}
                <SecureRoute path="/chatroom/:room">
                    <ChatRoom />
                </SecureRoute>
                <Route>
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    )
}