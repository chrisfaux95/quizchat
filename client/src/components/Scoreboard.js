import React, { useContext } from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText
} from 'reactstrap';
import QuizContext from '../utils/QuizContext';

export default function Scoreboard() {
    const quiz = useContext(QuizContext);
    return (
        <Card className="col-lg-3" id="score-board">
            {/* <CardImg className="cardLogo" top width="100%" src="./Triviatastic.png" alt="Card image cap" /> */}
            <CardBody>
                <CardTitle><h1>Scoreboard</h1></CardTitle>
                <hr />
                <CardSubtitle><h3>Username</h3></CardSubtitle>
                <hr />
                <CardText>Score: {quiz.score}</CardText>
                <hr />
                <CardText>Highscore</CardText>
                <hr />
                <CardText>Your Answer</CardText>
                <hr />
                <CardText>Correct Answer</CardText>
            </CardBody>
        </Card>
    )
}