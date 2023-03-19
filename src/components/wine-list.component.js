import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import WineTableRow from './WineTableRow';

export default class WineList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      wines: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/wines/')
      .then(res => {
        this.setState({
          wines: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.wines.map((res, i) => {
      return <WineTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover className="table-dark table-sm">
        <thead>
          <tr>
            <th>Name of wine</th>
            <th>Name of winery</th>
            <th>Type of wine</th>
            <th>Price($)</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}