import React from "react";
import {
    Jumbotron,
    Container
} from 'reactstrap';
import Scoreboard from "../../components/Scoreboard";
import Quiz from '../../components/Quiz'
import 
import QuizContext from '../../utils/QuizContext';
import "./style.css"

function QuizPg(props) {
    const quiz = useContext(QuizContext);
    return (
        <div className="row">
            <Scoreboard />
            <Jumbotron className="col-lg-9 my-0" fluid>
                {/* <Container fluid>
                    <h3 className="display-3">Dump Game Here</h3>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </Container> */}
                <Quiz />
            </Jumbotron>
        </div>
    );
};

export default QuizPg;