import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import BatchesList from './components/batches/BatchesList'
import BatchDetails from './components/batches/BatchDetails'
import CreateBatchForm from './components/batches/CreateBatchForm'
import StudentDetails from './components/students/StudentDetails'
import LogoutPage from './components/logout/LogoutPage'
import './App.css'
import TopBar from './components/layout/TopBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopBar />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/batches" component={BatchesList} />
          <Route exact path="/batches/:id" component={BatchDetails} />
          <Route exact path="/students/:id" component={StudentDetails} />
          <Route exact path="/createbatch" component={CreateBatchForm} />
          <Route exact path="/" render={ () => <Redirect to="/batches" /> } />
        </div>
      </Router>
    )
  }
}
export default App
