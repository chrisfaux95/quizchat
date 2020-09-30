import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap';
import { getCategories } from '../../utils/quizFunctions';

const diff = [
    { name: 'Any', value: 'any' },
    { name: 'Easy', value: 'easy' },
    { name: 'Medium', value: 'medium' },
    { name: 'Hard', value: 'hard' }
]

export default class QuizForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCat: "any",
            selectedDiff: "any"
        }
    }

    handleCatgoryChange = changeEvent => {
        this.setState({ selectedCat: changeEvent.target.value })
    }

    handleDifficultyChange = changeEvent => {
        this.setState({ selectedDiff: changeEvent.target.value })
    }

    handleFormSubmit = formEvent => {
        formEvent.preventDefault();
        this.props.handleQuizForm(this.state.selectedCat, this.state.selectedDiff);
    }



    render() {
        let categories = [{ name: "Any", value: "any" }, ...getCategories()];
        return (
            <Form onSubmit={this.handleFormSubmit}>
                <FormGroup>
                    <Label for="category-select">
                        Select Category:
                    </Label>
                    <Input
                    type="select"
                    name="select"
                    id="category-select"
                    value={this.state.selectedCat}
                    onChange={this.handleCatgoryChange}
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
                <FormGroup tag="fieldset">
                    <legend>Select Difficulty</legend>
                    {diff.map(i => {
                        return <DifficultyBtn
                            name={i.name}
                            value={i.value}
                            selectedOption={this.state.selectedDiff}
                            handleOptionChange={this.handleDifficultyChange}
                        />
                    })}
                </FormGroup>
                <Button>Start Quiz</Button>
            </Form>
        )
    }
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