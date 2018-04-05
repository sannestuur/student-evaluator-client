import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createBatch, getBatches } from "../../actions/batches";
import CreateBatchForm from "./CreateBatchForm";
import Paper from "material-ui/Paper";

class CreateBatchPage extends PureComponent {
  // componentWillMount() {
  //   if (this.props.authenticated) {
  //     if (this.props.batches === null) this.props.getBatches();
  //   }
  // }

  handleSubmit = batch => {
    this.props.createBatch(batch.id, batch.startDate, batch.endDate);
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state);
  // };

  // handleChange = event => {
  //   const { name, value } = event.target;
  //
  //   this.setState({
  //     [name]: value
  //   });
  // };

  render() {
    return (
      <Paper class="outer-paper">
        <h1>Create a new batch:</h1>
        <CreateBatchForm onSubmit={this.handleSubmit} />
      </Paper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.currentUser !== null,
  batches: state.batches === null ? null : state.batches
});

const mapDispatchToProps = {
  createBatch,
  getBatches
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBatchForm);
