import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createBatch, getBatches } from "../../actions/batches";
import Paper from "material-ui/Paper";


class CreateBatchForm extends PureComponent {
  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.batches === null) this.props.getBatches();
    }
  }

  handleSubmit = (batch) => {
    this.props.createBatch(batch.id, batch.startDate, batch.endDate);
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
    const { createBatch } = this.props;

    return (
      <Paper class="outer-paper">
        <h1>Create a new batch:</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="Batch">Batch</label>
            <input
              type="batch"
              placeholder="e.g. 15"
              name="batch"
              id="batch"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="startDate">Start Date</label>
            <input
              type="startDate"
              placeholder="dd-mm-yyyy"
              name="startDate"
              id="startDate"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="endDate">End Date</label>
            <input
              type="endDate"
              placeholder="dd-mm-yyyy"
              name="endDate"
              id="endDate"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" onClick={this.handleClick}>Add Batch</button>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.currentUser !== null,
  batches: state.batches === null ? null : state.batches,
});

const mapDispatchToProps = {
  createBatch,
  getBatches,
};

export default connect(mapStateToProps, mapDispatchToProps  )(CreateBatchForm);
