import React, { Component } from "react";
import {
    Jumbotron,
    Container
} from 'reactstrap';
import Scoreboard from "../../components/Scoreboard";
import Quiz from '../../components/Quiz';
import "./style.css";

export default class QuizPg extends Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    };

    render() {
        return (
            <div className="row">
                <Scoreboard />
                <Jumbotron className="col-lg-9 my-0" fluid>
                    <Quiz />
                </Jumbotron>
            </div>
        );
    };
    
};

export default QuizPg;