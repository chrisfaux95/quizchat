import React, { useContext, useState } from 'react';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap';
import QuizContext from '../../utils/QuizContext';
import { getCategories } from '../../utils/quizFunctions';
import './index.css'
const diff = [
    { name: 'Any', value: 'any' },
    { name: 'Easy', value: 'easy' },
    { name: 'Medium', value: 'medium' },
    { name: 'Hard', value: 'hard' }
]



export default function QuizForm(props) {
    const quiz = useContext(QuizContext);
    const [selectedCat, setSelectedCat] = useState("any");
    const [selectedDiff, setSelectedDiff] = useState("any");

    const handleCatgoryChange = changeEvent => {
        setSelectedCat(changeEvent.target.value);
    }

    const handleDifficultyChange = changeEvent => {
        setSelectedDiff(changeEvent.target.value);
    }

    const handleFormSubmit = formEvent => {
        formEvent.preventDefault();
        quiz.handleForm(selectedCat, selectedDiff);
    }

    let categories = [{ name: "Any", value: "any" }, ...getCategories()];
    return (
        <Form onSubmit={handleFormSubmit}>
            <FormGroup>
                <Label for="category-select">
                    Select Category:
                    </Label>
                <Input
                    type="select"
                    name="select"
                    id="category-select"
                    value={selectedCat}
                    onChange={handleCatgoryChange}
                >
                    {
                        categories.map(i => {
                            return <CategoryOption
                                name={i.name}
                                value={i.value}
                            />
                        })
                    }
                </Input>
            </FormGroup>
            <br></br>
            <FormGroup tag="fieldset">
                <legend>Select Difficulty</legend>
                {diff.map(i => {
                    return <DifficultyBtn
                        name={i.name}
                        value={i.value}
                        selectedOption={selectedDiff}
                        handleOptionChange={handleDifficultyChange}
                    />
                })}
            </FormGroup>
            <br></br>
            <Button>Start Quiz</Button>
        </Form>
    )



}

function CategoryOption({ name, value }) {
    return <option value={value}>{name}</option>
}

function DifficultyBtn({ name, value, selectedOption, handleOptionChange }) {
    return (
        <FormGroup check>
            <Label check>
                <Input type="radio"
                    name="difficulty-radio"
                    value={value}
                    checked={selectedOption === value}
                    onChange={handleOptionChange}
                />
                {' ' + name}
            </Label>
        </FormGroup>
    )
}