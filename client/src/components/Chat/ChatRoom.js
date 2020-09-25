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
    InputGroupAddon
} from 'reactstrap';
import Moment from 'moment';
import firebase from '../Firebase';
import ScrollToBottom from 'react-scroll-to-bottom';
import '../style/Styles.css';

function ChatRoom(props) {
    const [chats, setChats] = useState([]);
    const [users, setUsers] = useState([]);
    const [nickname, setNickname] = useState('');
    const [roomname, setRoomname] = useState('');
    const [newchat, setNewchat] = useState({ roomname: '', nickname: '', message: '', date: '', type: '' });
    const history = useHistory();
    const { room } = useParams();

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