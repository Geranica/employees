import { Component } from "react";
import { nanoid } from "nanoid";
import FormValidationError from "../app-form-validation-error/app-form-validation-error";

import './employers-add-form.scss';
//import "./employers-add-form.css";

class EmployersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
      errors: {
        nameError: false,
        nameErrorText: "Не менее 3 символов!",
        salaryError: false,
        salaryErrorText: "Введите значение!",
      },
    };
  }

  onValueChange = (e) => {
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.name.length < 3) {
      this.setState(() => ({
        errors: {
          nameError: true,
          nameErrorText: "Не менее 3 символов!",
        },
      }));
    } else if (!this.state.salary) {
      this.setState(() => ({
        errors: {
          salaryError: true,
          salaryErrorText: "Введите значение!",
        },
      }));
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
        errors: {
          nameError: false,
          nameErrorText: "Не менее 3 символов!",
          salaryError: false,
          salaryErrorText: "Введите значение!",
        },
      }));
    }
  };

  render() {
    const { name, salary, errors } = this.state;
    const { onSubmit } = this;

    let inputClassName1 = "form-control new-post-label";
    let inputClassName2 = "form-control new-post-label";

    if (errors.nameError) {
      inputClassName1 += ' red-border'
    }

    if (errors.salaryError) {
      inputClassName2 += ' red-border'
    }

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form onSubmit={onSubmit} className="add-form d-flex">
          <div className="flex-direction-column-container">
            <input
              value={name} // контролируемый элемент
              type="text"
              name="name"
              className={inputClassName1}
              placeholder="Как его зовут?"
              onChange={this.onValueChange}
            />
            {errors.nameError && (
              <FormValidationError errorMessage={errors.nameErrorText} />
            )}
          </div>
          <div className="flex-direction-column-container">
            <input
              value={salary} // контролируемый элемент
              type="text"
              className={inputClassName2}
              placeholder="З/П в $?"
              onChange={this.onValueChange}
              name="salary"
            />
            {errors.salaryError && (
              <FormValidationError errorMessage={errors.salaryErrorText} />
            )}
          </div>

          <button type="submit" className="btn btn-outline-light max-height">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployersAddForm;
