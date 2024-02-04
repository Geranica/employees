import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };
  
  render() {

    return (
      <input
        value={this.state.term}
        placeholder="Найти сотрудника"
        className="form-control search-input"
        type="text"
        onChange={(e)=> this.onUpdateSearch(e)}
      />
    );
  }
}
export default SearchPanel;
