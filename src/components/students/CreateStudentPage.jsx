import React, { PureComponent } from "react";
import { connect } from "react-redux";
import CreateStudentForm from './CreateStudentForm'
import { createStudent, getStudents } from "../../actions/students";
import Paper from "material-ui/Paper";

class CreateStudentPage extends PureComponent {
  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.students === null) this.props.getStudents();
    }
  }

  createStudent = student => {
    this.props.createStudent(student);
  };

  // handleSubmit = (batch) => {
  //   this.props.createBatch(batch.id, batch.startDate, batch.endDate);
  // };

  render() {
    return (
      <Paper>
        <h1>Create a new student:</h1>
        <CreateStudentForm onSubmit={this.createStudent} />
      </Paper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.currentUser !== null,
  students: state.students === null ? null : state.students
});

const mapDispatchToProps = {
  createStudent,
  getStudents
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateStudentPage);
