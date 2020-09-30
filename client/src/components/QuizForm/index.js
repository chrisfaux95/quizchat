import React from 'react';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap';
import { getCategories } from '../../utils/quizFunctions';


export default function QuizForm() {

    let categories = [{ name: "Any", value: "any" }, ...getCategories()];
    return (
        <Form>
            <FormGroup>
                <Label for="category-select">
                    Select Category:
                </Label>
                <Input type="select" name="select" id="category-select">
                    {
                        categories.map(i => {
                            return <CategoryOption name={i.name} value={i.value} />
                        })
                    }
                </Input>
            </FormGroup>
            <FormGroup tag="fieldset">
                <legend>Select Difficulty</legend>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="difficulty-radio" />{' '}
                        Any
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="difficulty-radio" />{' '}
                        Easy
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="difficulty-radio" />{' '}
                        Medium
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="difficulty-radio" />{' '}
                        Hard
                    </Label>
                </FormGroup>
            </FormGroup>
            <Button>Start Quiz</Button>
        </Form>
    )
}

function CategoryOption({ name, value }) {
    return <option value={value}>{name}</option>
}