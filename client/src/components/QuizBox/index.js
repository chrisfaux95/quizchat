import React from 'react';
import { Button, Row, Col, Container } from 'reactstrap';
import { shuffleArray } from '../../utils/quizFunctions';

export default function QuizBox(props) {
    let { category, question, answers } = props;
    return (
        <Container fluid>
            <h1>{category}</h1>
            <hr />
            <br />
            <QuestionBox />
        </Container>
    )
}

function QuizButton({ answer, onClick }) {
    return (
        <Button>
            {answer}
        </Button>
    )
}

function QuestionBox(props) {
    let { question, answers } = props;
    return (
        <>
            <h4>{question}</h4>
            <br />
            {answers.map((ans) => <QuizButton answer={ans} />)}
        </>
    )

}