import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {
    Jumbotron,
    Spinner,
    Form,
    Button,
    FormGroup, 
    Label, 
    Input,
    Container
} from 'reactstrap';
import firebase from '../../../Firebase';
import "./Login.css"
import logo1 from '../../../images/loginlogo.png'




function Login() {
    const history = useHistory();
    const [creds, setCreds] = useState({ nickname: '', email:'', password:'' });
    const [showLoading, setShowLoading] = useState(false);
    const ref = firebase.database().ref('users/');

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log(user)
                } else {
                    console.log(firebase.auth().currentUser)
                }
      });
      console.log(firebase.auth().currentUser)
    

    const onChange = (e) => {
        e.persist();
        setCreds({...creds, [e.target.name]: e.target.value});
    }
    const login = (e) => {
    
        e.preventDefault();
        setShowLoading(true);
        ref.orderByChild('nickname').equalTo(creds.nickname).once('value', snapshot => {
            if (snapshot.exists()) {
                localStorage.setItem('nickname', creds.nickname);
                history.push('/roomlist');
                setShowLoading(false);
            } else {
                const newUser = firebase.database().ref('users/').push();
                newUser.set(creds);
                localStorage.setItem('nickname', creds.nickname);
                history.push('/roomlist');
                setShowLoading(false);
                
            }
        });
    }; console.log(creds, "appear")
    return (
        

        <div>
            {showLoading &&
                <Spinner color="primary" />
            }
            <div className="jumbologin">
            <img src={logo1} id="logo1"/>
                <div className="lgn-frm">
                <Form onSubmit={login}>
                    <FormGroup>
                        
                        <Label><h2>Login</h2></Label>
                        <Input type="email" name="email" id="email" placeholder="Enter Your Email" value={creds.email} onChange={onChange} />
                        <br></br>
                        <Input type="password" name="password" id="password" placeholder="Enter Your Password" value={creds.password} onChange={onChange} />
                        <br></br>
                        <Input type="text" name="nickname" id="nickname" placeholder="Enter Your Username" value={creds.nickname} onChange={onChange} />
                    </FormGroup>
                    <Button className="submit-button" variant="primary" type="submit" >
                        Login
                    </Button>
                </Form>
                </div>
            </div>
            
        </div>
        
    );
        };
    export default Login;
    
    