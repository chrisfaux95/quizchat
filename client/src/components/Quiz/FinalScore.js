import React from 'react';
import { Button } from 'reactstrap'

export default function FinalScore(props){
    const { score, setStage } = props;
    const [s, setScore] = score;

    const handleClick = () => {
        setStage(0);
        setScore(0);
    }

    return (
        <>
            <h1>COMPLETE</h1>
            <h4>You scored {s} points!</h4>
            <Button onClick={handleClick}></Button>
        </>
    )
}