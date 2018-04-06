import React, { PureComponent } from "react";

class CreateStudentForm extends PureComponent {
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
          <label htmlFor="firstName">First Name:</label>
          <input
            type="firstName"
            placeholder="first name"
            name="firstName"
            id="firstName"
            value={this.state.firstName || ""}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="lastName"
            placeholder="last name"
            name="lastName"
            id="lastName"
            value={this.state.lastName || ""}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="Photo">Photo:</label>
          <input
            type="photo"
            placeholder="www.example.com"
            name="photo"
            id="photo"
            value={this.state.photo || ""}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    );
  }
}

export default CreateStudentForm;
