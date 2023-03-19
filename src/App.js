import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateWine from './components/create-wine.component'
import EditWine from './components/edit-wine.component'
import WineList from './components/wine-list.component'

const createError = require('http-errors');

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/create-wine'} className="nav-link">
                  React MERN Stack App
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-wine'} className="nav-link">
                    Create Wine
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/wine-list'} className="nav-link">
                    Wine List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateWine {...props} />}
                  />
                  <Route
                    exact
                    path="/create-wine"
                    component={(props) => <CreateWine {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-wine/:id"
                    component={(props) => <EditWine {...props} />}
                  />
                  <Route
                    exact
                    path="/wine-list"
                    component={(props) => <WineList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App