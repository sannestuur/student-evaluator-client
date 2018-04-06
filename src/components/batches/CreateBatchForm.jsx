import React, { PureComponent } from "react";

class CreateBatchForm extends PureComponent {
  state = {};

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
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="Batch">Batch</label>
          <input
            name="id"
            placeholder="e.g. 15"
            id="id"
            value={this.state.id || ""}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            name="startDate"
            placeholder="dd-mm-yyyy"
            id="startDate"
            value={this.state.startDate || ""}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            name="endDate"
            placeholder="dd-mm-yyyy"
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

export default CreateBatchForm;
