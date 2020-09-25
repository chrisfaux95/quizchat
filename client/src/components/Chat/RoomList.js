import React, { useState, useEffect } from 'react';
import {
    Link,
    useHistory
  } from "react-router-dom";
import {
    Jumbotron,
    Spinner,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import Moment from 'moment';
import firebase from '../Firebase';

function RoomList() {
    const [room, setRoom] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    const [nickname, setNickname] = useState('');
    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            setNickname(localStorage.getItem('nickname'));
            firebase.database().ref('rooms/').on('value', resp => {
                setRoom([]);
                setRoom(snapshotToArray(resp));
                setShowLoading(false);
            });
        };
        
        fetchData();
    }, []); 
    const snapshotToArray = (snapshot) => {
        const returnArr = [];

        snapshot.forEach((childSnapshot) => {
            const item = childSnapshot.val();
            item.key = childSnapshot.key;
            returnArr.push(item);
        });

        return returnArr;