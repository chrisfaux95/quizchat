import React from "react";
import {
    Jumbotron,
    Container
} from 'reactstrap';
import Scoreboard from "../../components/Scoreboard";
import QuizBox from '../../components/QuizBox';
import QuizForm from '../../components/QuizForm';
import "./style.css"

function QuizPg(props) {
    return (
        <div className="row">
            <Scoreboard />
            <Jumbotron className="col-lg-9 my-0" fluid>
                {/* <Container fluid>
                    <h3 className="display-3">Dump Game Here</h3>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </Container> */}
                <QuizForm />
            </Jumbotron>
        </div>
    );
};

export default QuizPg;