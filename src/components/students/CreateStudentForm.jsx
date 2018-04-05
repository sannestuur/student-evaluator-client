import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createStudent } from "../../actions/students";
import Paper from "material-ui/Paper";


class CreateStudentForm extends PureComponent {

  handleSubmit = (student) => {
    this.props.createStudent(student.firstName, student.lastName, student.batch, student.photo);
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state);
  // };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {

    return (
      <Paper class="outer-paper">
        <h1>Create a new student:</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="firstName"
              placeholder="first name"
              name="firstName"
              id="firstName"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="lastName"
              placeholder="last name"
              name="lastName"
              id="lastName"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="Batch">Batch:</label>
            <input
              type="batch"
              placeholder="e.g. 15"
              name="batch"
              id="batch"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="Photo">Photo:</label>
            <input
              type="photo"
              placeholder="www.example.com"
              name="photo"
              id="photo"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" onClick={this.handleClick}>Add Student</button>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.currentUser !== null,
});

const mapDispatchToProps = {
  createStudent,
};

export default connect(mapStateToProps, mapDispatchToProps  )(CreateStudentForm);
