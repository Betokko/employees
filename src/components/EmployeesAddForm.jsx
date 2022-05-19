import React from "react";
import "./styles/EmployeesAddForm.css";

class EmployeesAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: 0,
    };
  }

  onValueChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onAddSubmit(this.state);
    this.setState({ name: "", salary: 0 });
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="EmployeesAddForm">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            name="name"
            value={name}
            onChange={this.onValueChange}
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
          />
          <input
            name="salary"
            value={salary}
            onChange={this.onValueChange}
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
          />

          <button
            type="submit"
            className="btn btn-outline-light"
            onClick={this.handleSubmit}
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
