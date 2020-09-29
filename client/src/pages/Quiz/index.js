import React from "react";
import {
    Card,
    CardColumns,
    CardImg, 
    CardText, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    Button
} from 'reactstrap';
import "./style.css"
function QuizPg (props) {
        return (
          <div>
            <Card className="col-lg-3">
              <CardImg className="cardLogo" top width="100%" src="./Triviatastic.png" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
            </Card>
          </div>
        );
};

export default QuizPg;