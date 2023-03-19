import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditWine extends Component {

  constructor(props) {
    super(props)

    this.onChangeWineNameOfWine = this.onChangeWineNameOfWine.bind(this);
    this.onChangeWineNameOfWinery = this.onChangeWineNameOfWinery.bind(this);
    this.onChangeWineTypeOfWine = this.onChangeWineTypeOfWine.bind(this);
    this.onChangeWinePrice = this.onChangeWinePrice.bind(this);
    this.onChangeWineRating = this.onChangeWineRating.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      nameOfWine: '',
      nameOfWinery: '',
      typeOfWine: '',
      price: '',
      rating: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/wines/edit-wine/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          nameOfWine: res.data.nameOfWine,
          nameOfWinery: res.data.nameOfWinery,
          typeOfWine: res.data.typeOfWine,
          price: res.data.price,
          rating: res.data.rating
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('http://localhost:4000/wines/update-wine/' + this.props.match.params.id, wineObject)
      .then((res) => {
        console.log(res.data)
        console.log('Wine successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Wine List 
    this.props.history.push('/wine-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="NameOfWine">
          <Form.Label>Name of wine</Form.Label>
          <Form.Control type="text" value={this.state.nameOfWine} onChange={this.onChangeWineNameOfWine} />
        </Form.Group>

        <Form.Group controlId="NameOfWinery">
          <Form.Label>Name of winery</Form.Label>
          <Form.Control type="text" value={this.state.nameOfWinery} onChange={this.onChangeWineNameOfWinery} />
        </Form.Group>

        <Form.Group controlId="TypeOfWinery">
          <Form.Label>Type of wine</Form.Label>
          <Form.Control type="text" value={this.state.typeOfWine} onChange={this.onChangeWineTypeOfWine} />
        </Form.Group>

        <Form.Group controlId="Price">
          <Form.Label>Price($)</Form.Label>
          <Form.Control type="text" value={this.state.price} onChange={this.onChangeWinePrice} />
        </Form.Group>

        <Form.Group controlId="Rating">
          <Form.Label>Rating</Form.Label>
          <Form.Control type="text" value={this.state.rating} onChange={this.onChangeWineRating} />
        </Form.Group>

        <Button variant="dark" size="lg" block="block" type="submit" className="mt-4">
          Update Wine
        </Button>
      </Form>
    </div>);
  }
}