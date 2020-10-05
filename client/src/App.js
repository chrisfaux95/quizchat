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
import Sudoku from "./sudoku/index";
import Status from "./components/Chat/Status"

export default function App() {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route exact path="/">
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
                <Route path="/sudoku">
                    <Sudoku />
                </Route>
                <Route path="/tictactoe">
                    <Tgame />
                </Route>
                <Route path="/roomlist">
                    <RoomList />
                </Route>
                {/* <SecureRoute path="/addroom">
            <AddRoom />
          </SecureRoute> */}
                <Route path="/chatroom/:room">
                    <ChatRoom />
                </Route>
                <Route>
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    )
}