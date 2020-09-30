import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import Login from "../components/Chat/Login";
import RoomList from "../components/Chat/RoomList";
import AddRoom from "../components/Chat/AddRoom";
import ChatRoom from "../components/Chat/ChatRoom";
import Navigation from "../components/Navbar";
import QuizPg from "./Quiz";
import HighScoresPg from "./HighScores";



function Chat() {
  let location = useLocation();

  return (
    <Router>
      <div>
        {/* <Redirect
          to={{
            pathname: "/login",
            state: { from: location },
          }}
        /> */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/quiz">
            <Navigation />
            <QuizPg />
          </Route>
          <Route path="/highscores">
            <Navigation />
            <HighScoresPg />
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
        </Switch>
      </div>
    </Router>
  );
}

export default Chat;
