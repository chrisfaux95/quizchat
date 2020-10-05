import React, { useState } from "react";
import {
    Jumbotron,
    Container
} from 'reactstrap';
import Scoreboard from "../../components/Scoreboard";
import Quiz from '../../components/Quiz'
import QuizContext from '../../utils/QuizContext';
import "./style.css"

function QuizPg(props) {
    const quiz = useContext(QuizContext);
    const [pageState, setPageState] = useState({
        stage: 0,
        score: 0,
        questions: [],

    })

    return (
        <QuizContext.Provider value={pageState}>
            <div className="row">
                <Scoreboard />
                <Jumbotron className="col-lg-9 my-0" fluid>
                    <Quiz />
                </Jumbotron>
            </div>
        </QuizContext.Provider>
    );
};

export default QuizPg;