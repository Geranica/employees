import { Component } from "react";
import "./app-form-validation-error.css";

class FormValidationError extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let nameError = this.props.name;
    return <span className="add-error">{nameError}</span>;
  }
}

export default FormValidationError;
