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

  state = {}

  // handleSubmit = (batch) => {
  //   this.props.createBatch(batch.id, batch.startDate, batch.endDate);
  // };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {

    return (
      <Paper class="outer-paper">
        <h1>Create a new batch:</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="Batch">Batch</label>
            <input
              name="id"
              placeholder="e.g. 15"
              id="id"
              value={this.state.id || ''}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="startDate">Start Date</label>
            <input
              name="startDate"
              placeholder="dd-mm-yyyy"
              id="startDate"
              value={this.state.startDate || ''}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="endDate">End Date</label>
            <input
              name="endDate"
              placeholder="dd-mm-yyyy"
              id="endDate"
              value={this.state.endDate || ''}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">Add Batch</button>
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
