import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class WineTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteWine = this.deleteWine.bind(this);
    }

    deleteWine() {
        axios.delete('http://localhost:4000/wines/delete-wine/' + this.props.obj._id)
            .then((res) => {
                console.log('Wine successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.nameOfWine}</td>
                <td>{this.props.obj.nameOfWinery}</td>
                <td>{this.props.obj.typeOfWine}</td>
                <td>{this.props.obj.price}</td>
                <td>{this.props.obj.rating}</td>
                <td>
                    <Link className="edit-link" to={"/edit-wine/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteWine} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}