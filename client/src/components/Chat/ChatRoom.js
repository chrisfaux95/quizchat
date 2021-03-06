import React, { useState, useEffect } from 'react';
import {
    useHistory,
    useParams
} from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardSubtitle,
    Button,
    Form,
    InputGroup,
    Input,
    InputGroupAddon,
    Jumbotron,
    NavigationBar
} from 'reactstrap';
import Moment from 'moment';
import firebase from '../../Firebase';
// import Emoji from "./Emoji"
// import FriendsList from "./FriendsList"
import ScrollToBottom from 'react-scroll-to-bottom';
import { MDBContainer } from "mdbreact";
import "./scrollbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomList from "./RoomList"
import Navigation from "../Navbar/index"
import ChatBubble from '../../PopupChat.js/chatBubble';
import "./ChatRoom.css"
// import InputEmoji from 'react-input-emoji'

// import '../style/Styles.css';

function ChatRoom(props) {
    console.log(firebase.database().ref().child("users"))
    const [chats, setChats] = useState([]);
    const [users, setUsers] = useState([]);
    const [nickname, setNickname] = useState('');
    const [roomname, setRoomname] = useState('');
    const [newchat, setNewchat] = useState({ roomname: '', nickname: '', message: '', date: '', type: '' });
    const history = useHistory();
    const { room } = useParams();

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        //User signed in
        } else {
          // No user is signed in.
        }
      });
      console.log(firebase.auth().currentUser)
    

    useEffect(() => {
        const fetchData = async () => {
            setNickname(localStorage.getItem('nickname'));
            setRoomname(room);
            firebase.database().ref('chats/').orderByChild('roomname').equalTo(roomname).on('value', resp => {
                setChats([]);
                setChats(snapshotToArray(resp));
            });
        };

        fetchData();
    }, [room, roomname]);
    useEffect(() => {
        const fetchData = async () => {
            setNickname(localStorage.getItem('nickname'));
            setRoomname(room);
            firebase.database().ref('roomusers/').orderByChild('roomname').equalTo(roomname).on('value', (resp2) => {
                setUsers([]);
                const roomusers = snapshotToArray(resp2);
                setUsers(roomusers.filter(x => x.status === 'online'));
            });
        };

        fetchData();
    }, [room, roomname]);

    const snapshotToArray = (snapshot) => {
        const returnArr = [];

        snapshot.forEach((childSnapshot) => {
            const item = childSnapshot.val();
            item.key = childSnapshot.key;
            returnArr.push(item);
        });

        return returnArr;
    }
    const submitMessage = (e) => {
        e.preventDefault();
        const chat = newchat;
        chat.roomname = roomname;
        chat.nickname = nickname;
        chat.date = Moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
        chat.type = 'message';
        const newMessage = firebase.database().ref('chats/').push();
        newMessage.set(chat);
        setNewchat({ roomname: '', nickname: '', message: '', date: '', type: '' });
    };
    const onChange = (e) => {
        e.persist();
        setNewchat({ ...newchat, [e.target.name]: e.target.value });
    }
    const exitChat = (e) => {
        const chat = { roomname: '', nickname: '', message: '', date: '', type: '' };
        chat.roomname = roomname;
        chat.nickname = nickname;
        chat.date = Moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
        chat.message = `${nickname} leave the room`;
        chat.type = 'exit';
        const newMessage = firebase.database().ref('chats/').push();
        newMessage.set(chat);

        firebase.database().ref('roomusers/').orderByChild('roomname').equalTo(roomname).once('value', (resp) => {
            let roomuser = [];
            roomuser = snapshotToArray(resp);
            const user = roomuser.find(x => x.nickname === nickname);
            if (user !== undefined) {
                const userRef = firebase.database().ref('roomusers/' + user.key);
                userRef.update({ status: 'offline' });
            }
        });

        history.goBack();
    }

    return (
        
        <Container className="mpx-0" fluid={true}  id="container-block">

                <Row className="no-gutters">
                <Col xs="3" id="div-3">
                < RoomList />
                </Col>
                    <Col xs="6">
                        <MDBContainer id="chat-box">
                            <Jumbotron className ="mpxy-0" id="jumbo-1">
                                <div className="scrollbar scrollbar-morpheus-den mt-5 mx-auto" style={{ maxHeight: "563px" }}>
                                    {/* <ScrollToBottom className="ChatContent"> */}
                                    {chats.map((item, idx) => (
                                        <div key={idx} className="MessageBox">
                                            {item.type === 'join' || item.type === 'exit' ?
                                                <div className="ChatStatus">
                                                    <span className="ChatDate">{item.date}</span>
                                                    <span className="ChatContentCenter">{item.message}</span>
                                                </div> :
                                                <div className="ChatMessage">
                                                    <div className={`${item.nickname === nickname ? "RightBubble" : "LeftBubble"}`}>
                                                        {item.nickname === nickname ?
                                                            <span className="MsgName">Me</span> : <span className="MsgName">{item.nickname}</span>
                                                        }
                                                        <span className="MsgDate"> at {item.date}</span>
                                                        <p>{item.message}</p>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    ))}
                                    {/* </ScrollToBottom> */}
                                </div>
                            </Jumbotron>
                        </MDBContainer>
                        {/* <footer className="StickyFooter"> */}
                            <Form className="MessageForm" onSubmit={submitMessage}>
                                <InputGroup id="input-box" >
                                    
                                    <Input type="text" name="message" id="message" placeholder="Enter message here" value={newchat.message} onChange={onChange} />
                                    
                                    <InputGroupAddon addonType="append">
                                        <Button variant="primary" type="submit">Send</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        {/* </footer> */}
                    </Col>
                    <Col xs="3" id="div-2">
                        <div id="div-cards">
                            <Card className="UsersCard" id="user-card">
                                <CardBody>
                                    <CardSubtitle>
                                        <Button variant="primary" type="button">
                                            Add Friend
                                        </Button>
                                    </CardSubtitle>
                                </CardBody>
                            </Card>
                            {/* ADD FRIEND BUTTON NEXT TO USERS */}
                            {users.map((item, idx) => (
                                <Card id="user-cards" key={idx} className="UsersCard">
                                    <CardBody>
                            <CardSubtitle>{item.nickname}</CardSubtitle>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </Col>
                </Row>
                <ChatBubble />
            </Container>
        
    );
}

export default ChatRoom;