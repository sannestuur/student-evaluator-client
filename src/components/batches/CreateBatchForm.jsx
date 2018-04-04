import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import { createBatch } from "../../actions/batches";

class CreateBatchForm extends PureComponent {

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
    const { createBatch } = this.props;

    return (
      <form onSubmit={this.createBatch}>
        <div>
          <label htmlFor="Batch">Batch</label>
          <input
            type="batch"
            placeholder="e.g. 15"
            name="batch"
            id="batch"
            value={this.state.id || ""}
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
            value={this.state.startDate || ""}
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
            value={this.state.endDate || ""}
            onChange={this.handleChange}
          />
        </div>

        <button type="submit">Add Batch</button>
      </form>
    );
  }
}

export default withRouter(connect({ createBatch })(CreateBatchForm));
