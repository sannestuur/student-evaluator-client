import React, { PureComponent } from "react";
import { connect } from "react-redux";
import CreateBatchForm from "./CreateBatchForm";
import { createBatch, getBatches } from "../../actions/batches";
import Paper from "material-ui/Paper";

class CreateBatchPage extends PureComponent {
  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.batches === null) this.props.getBatches();
    }
  }

  createBatch = batch => {
    this.props.createBatch(batch);
  };

  // handleSubmit = (batch) => {
  //   this.props.createBatch(batch.id, batch.startDate, batch.endDate);
  // };

  render() {
    return (
      <Paper class="outer-paper">
        <h1>Create a new batch:</h1>
        <CreateBatchForm onSubmit={this.createBatch} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateBatchPage);
