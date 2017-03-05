import React, { Component } from 'react'
import './App.css'
import AddChore from './containers/addChore'
import ChoreList from './containers/choreList'
import ChoreListInfo from './containers/choreListInfo'
import { Grid, Row, Col } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col md={12}>
              <ChoreListInfo />
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <AddChore />
            </Col>
            <Col md={12}>
              <ChoreList />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App
