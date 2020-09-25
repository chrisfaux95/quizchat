import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation
  } from "react-router-dom";
  import Login from '../components/Chat/Login';
  import RoomList from '../components/Chat/RoomList';
  import AddRoom from '../components/Chat/AddRoom';
  import ChatRoom from '../components/Chat/ChatRoom';
  
  function SecureRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.getItem('nickname') ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  
  function Chat() {
    let location = useLocation();
  
    return (
      <Router>
        <div>
          <Redirect
            to={{
              pathname: "/roomlist",
              state: { from: location }
            }}
          />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <SecureRoute path="/roomlist">
              <RoomList />
            </SecureRoute>
            <SecureRoute path="/addroom">
              <AddRoom />
            </SecureRoute>
            <SecureRoute path="/chatroom/:room">
              <ChatRoom />
            </SecureRoute>
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default Chat;