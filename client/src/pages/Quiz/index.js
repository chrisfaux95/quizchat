import React from "react";
import {
    Card,
    CardColumns,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Jumbotron,
    Container
} from 'reactstrap';
import "./style.css"
function QuizPg(props) {
    return (
        <div className="row">
            <Card className="col-lg-3">
                {/* <CardImg className="cardLogo" top width="100%" src="./Triviatastic.png" alt="Card image cap" /> */}
                <CardBody>
                    <CardTitle><h1>Scoreboard</h1></CardTitle>
                    <hr />
                    <CardSubtitle><h3>Username</h3></CardSubtitle>
                    <hr />
                    <CardText>Score</CardText>
                    <hr />
                    <CardText>Highcore</CardText>
                    <hr />
                    <CardText>Your Answer</CardText>
                    <hr />
                    <CardText>Correct Answer</CardText>
                    </CardBody>
            </Card>
            <Jumbotron className="col-lg-9 my-0" fluid>
                <Container fluid>
                    <h3 className="display-3">Dump Game Here</h3>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default QuizPg;