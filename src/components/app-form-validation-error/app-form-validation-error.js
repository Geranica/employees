import { Component } from "react";
import "./app-form-validation-error.css";

class FormValidationError extends Component {

  render() {
    let nameError = this.props.errorMessage;
    return <span className="add-error">{nameError}</span>;
  }
}

export default FormValidationError;
