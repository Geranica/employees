import { Component } from "react";
import { nanoid } from "nanoid";
import FormValidationError from "../app-form-validation-error/app-form-validation-error";

import "./employers-add-form.css";

class EmployersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.name.length < 3 || !this.state.salary) {
      return false;
    } else {
      const person = {
        name: this.state.name,
        salary: this.state.salary,
        increase: false,
        rise: false,
        id: nanoid(),
      };
      this.props.onAdd(person);
      this.setState(() => ({
        name: "",
        salary: "",
      }));
    }
  };

  render() {
    const { name, salary } = this.state;
    const { onSubmit } = this;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form onSubmit={onSubmit} className="add-form d-flex">
          <input
            value={name} // контролируемый элемент
            type="text"
            name="name"
            className= 'form-control new-post-label'
            placeholder="Как его зовут?"
            onChange={this.onValueChange}
          />
          <input
            value={salary} // контролируемый элемент
            type="text"
            className='form-control new-post-label'
            placeholder="З/П в $?"
            onChange={this.onValueChange}
            name="salary"
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployersAddForm;
