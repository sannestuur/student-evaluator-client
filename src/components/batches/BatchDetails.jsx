import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getBatches, updateBatch } from "../../actions/batches";
import { createStudent } from "../../actions/students";
import { userId } from "../../jwt";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import "./BatchDetails.css";

class BatchDetails extends PureComponent {
  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.batch === null) this.props.getBatches();
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
    const { batch, users, authenticated, userId } = this.props;
    const batchStudents = batch.students;

    if (!authenticated) return <Redirect to="/login" />;

    return (
      <Paper class="outer-paper">
        <h1>Batch #{batch.id}</h1>
        <Button
          color="secondary"
          variant="raised"
          onClick={createStudent}
          className="ask-question"
        >
          Ask a Question
        </Button>
        <Button
          color="primary"
          variant="raised"
          onClick={createStudent}
          className="create-student"
        >
          Add New Student
        </Button>
        <div>{batchStudents.map(student => this.renderStudent(student))}</div>
      </Paper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  batch: state.batches && state.batches[props.match.params.id]
});

const mapDispatchToProps = {
  getBatches,
  updateBatch
};

export default connect(mapStateToProps, mapDispatchToProps)(BatchDetails);
