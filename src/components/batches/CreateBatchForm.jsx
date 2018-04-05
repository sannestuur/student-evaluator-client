import React, { PureComponent } from "react";

export default class CreateBatchForm extends PureComponent {
  state = {};

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
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

        <button type="submit">Add Batch</button>
      </form>
    );
  }
}
