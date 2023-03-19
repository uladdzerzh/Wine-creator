import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateWine extends Component {
    constructor(props) {
        super(props)

        // Setting up functions
        this.onChangeWineNameOfWine = this.onChangeWineNameOfWine.bind(this);
        this.onChangeWineNameOfWinery = this.onChangeWineNameOfWinery.bind(this);
        this.onChangeWineTypeOfWine = this.onChangeWineTypeOfWine.bind(this);
        this.onChangeWinePrice = this.onChangeWinePrice.bind(this);
        this.onChangeWineRating = this.onChangeWineRating.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            nameOfWine: '',
            nameOfWinery: '',
            typeOfWine: '',
            price: '',
            rating: ''
        }
    }

    onChangeWineNameOfWine(e) {
        this.setState({ nameOfWine: e.target.value })
    }

    onChangeWineNameOfWinery(e) {
        this.setState({ nameOfWinery: e.target.value })
    }

    onChangeWineTypeOfWine(e) {
        this.setState({ typeOfWine: e.target.value })
    }

    onChangeWinePrice(e) {
        this.setState({ price: e.target.value })
    }

    onChangeWineRating(e) {
        this.setState({ rating: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const wineObject = {
            nameOfWine: this.state.nameOfWine,
            nameOfWinery: this.state.nameOfWinery,
            typeOfWine: this.state.typeOfWine,
            price: this.state.price,
            rating: this.state.rating
        };
        axios.post('http://localhost:4000/wines/create-wine', wineObject)
            .then(res => console.log(res.data));

        this.setState({ nameOfWine: '', nameOfWinery: '', typeOfWine: '', price: '', rating: '' })
    }
    render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="NameOfWine">
                    <Form.Label>Name of wine</Form.Label>
                    <Form.Control placeholder="Enter name of wine" type="text" value={this.state.nameOfWine} onChange={this.onChangeWineNameOfWine} />
                </Form.Group>

                <Form.Group controlId="NameOfWinery">
                    <Form.Label>Name of winery</Form.Label>
                    <Form.Control placeholder="Enter name of winery" type="text" value={this.state.nameOfWinery} onChange={this.onChangeWineNameOfWinery} />
                </Form.Group>

                <Form.Group controlId="TypeOfWine">
                    <Form.Label>Type of wine</Form.Label>
                    <Form.Control placeholder="Enter type of wine" type="text" value={this.state.typeOfWine} onChange={this.onChangeWineTypeOfWine} />
                </Form.Group>

                <Form.Group controlId="Price">
                    <Form.Label>Price($)</Form.Label>
                    <Form.Control placeholder="Enter price" type="text" value={this.state.price} onChange={this.onChangeWinePrice} />
                </Form.Group>

                <Form.Group controlId="Rating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control placeholder="Enter rating" type="text" value={this.state.rating} onChange={this.onChangeWineRating} />
                </Form.Group>

                <Button variant="dark" size="lg" block="block" type="submit" className="mt-4">
                    Create Wine
                </Button>
            </Form>
        </div>);
    }
}