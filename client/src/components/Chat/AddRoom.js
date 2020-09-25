import React, { useState } from 'react';
    import {
        useHistory
    } from "react-router-dom";
    import {
        Alert,
        Jumbotron,
        Spinner,
        Form,
        Button,
        FormGroup, 
        Label, 
        Input
    } from 'reactstrap';
    import firebase from '../Firebase';
    function AddRoom() {
        const history = useHistory();
        const [room, setRoom] = useState({ roomname: '' });
        const [showLoading, setShowLoading] = useState(false);
        const ref = firebase.database().ref('rooms/');