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
      if (this.props.students === null) this.props.getStudents();
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

  renderStudent = student => {
    const { history } = this.props;

    return (
      <Card
        key={student.id}
        className="student-card"
        width="120"
        onClick={() => history.push(`/students/${student.id}`)}>
        <CardContent>
          <CardMedia>
            <img src={student.photo} alt="img" width="100" />
          </CardMedia>
          <Typography variant="headline" component="h2">
            {student.firstName} {student.lastName}
          </Typography>
          <Typography color="textSecondary">
            Status: {this.renderStatus(student)}
          </Typography>
        </CardContent>
        <CardActions />
      </Card>
    );
  };

  render() {
    const { users, authenticated, userId, student } = this.props;

    if (!authenticated) return <Redirect to="/login" />;

    return (
      <Paper class="outer-paper">
        <h1>Student #{student.id}</h1>
      </Paper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  students: state.students === null ? null : state.users,
  student: state.students && state.students[props.match.params.id]
});

const mapDispatchToProps = {
  getStudents,
  updateStudent,
  getStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails);
