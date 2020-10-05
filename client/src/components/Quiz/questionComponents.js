import React from 'react';
import { Button } from 'reactstrap';

export function CatHead(props) {
    return (
        <>
            <h1>{props.children}</h1>
            <br />
        </>
    )
}

export function QHead(props) {
    return (
        <>
            <h4>{props.children}</h4>
            <br />
        </>
    )
}

export function AnsBtn(props) {
    return (
        <Button onClick={props.handleAnswer}>
            {props.answer}
        </Button>
    )
}