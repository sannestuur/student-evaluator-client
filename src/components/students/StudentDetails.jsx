import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getStudent, getStudents, updateStudent, createStudent } from "../../actions/students";
import { userId } from "../../jwt";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import "./StudentDetails.css";

class StudentDetails extends PureComponent {
  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.student === null) this.props.getStudents();
      // if (this.props.student === null) this.props.getStudent();

    }
  }

  getStatus = student => {
    let lastEvaluation = student.evaluations[0] || "unknown";
    return lastEvaluation.status || "unknown";
  }

  renderStatus = student => {
    let lastEvaluation = student.evaluations[0] || "unknown";
    let lastStatus = lastEvaluation.status || "unknown";
    switch (lastStatus) {
      case "green":
        return <div className="square green" />;
      case "yellow":
        return <div className="square yellow" />;
      case "red":
        return <div className="square red" />;
      default:
        return <p>Not evaluated yet</p>;
    }
  };

  renderEvaluation = evaluation => {
    let thisStatus = evaluation.status || "unknown";
    switch (thisStatus) {
      case "green":
        return <div className="square green" id={evaluation.id}/>;
      case "yellow":
        return <div className="square yellow" id={evaluation.id}/>;
      case "red":
        return <div className="square red" id={evaluation.id}/>;
      default:
        return <p>Not evaluated yet</p>;
    }
  };

  render() {
    const { users, authenticated, userId, student } = this.props;

    if (!authenticated) return <Redirect to="/login" />;

    return (
      <Paper class="outer-paper">
        <h1>Student #{student.id}</h1>
          <Card
            key={student.id}
            className="student-card"
            width="120">
            <CardContent>
              <CardMedia>
                <img src={student.photo} alt="img" width="100" />
              </CardMedia>
              <Typography variant="headline" component="h2">
                {student.firstName} {student.lastName}
              </Typography>
              <Typography variant="headline" component="h2">
                Batch #15
              </Typography>
              <Typography color="textSecondary">
                Evaluations: {student.evaluations.reverse().map(e => this.renderEvaluation(e))}
              </Typography>
              <div className="bigsquare green "/>
              <div className="bigsquare yellow "/>
              <div className="bigsquare red "/>
              <Typography color="textSecondary">
                Daily evaluation for: [dd]/[mm]/[yyyy]
              </Typography>
              <form onSubmit={this.handleSubmit}>
        				<div>
        					<label htmlFor="remarks">remarks:</label>
        					<input type="text" name="remarks" id="remarks" value={
        						student.id || ''
        					} onChange={ this.handleChange } />
        				</div>
        				<button type="submit">Save</button>
                <button type="submitandnext">Save and Next</button>
        			</form>
            </CardContent>
            <CardActions />
          </Card>
      </Paper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  students: state.students === null ? null : state.students,
  student: state.students && state.students[props.match.params.id]
  // student: state.students.find(s => s.id === Number(props.match.params.id))
});

const mapDispatchToProps = {
  getStudents,
  updateStudent,
  getStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails);
