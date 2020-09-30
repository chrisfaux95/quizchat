import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText
} from 'reactstrap';

export default function Scoreboard() {
    return (
        <Card className="col-lg-3">
            {/* <CardImg className="cardLogo" top width="100%" src="./Triviatastic.png" alt="Card image cap" /> */}
            <CardBody>
                <CardTitle><h1>Scoreboard</h1></CardTitle>
                <hr />
                <CardSubtitle><h3>Username</h3></CardSubtitle>
                <hr />
                <CardText>Score</CardText>
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