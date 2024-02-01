import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John Smith", salary: 800, increase: true, id: 1 },
        { name: "Alex Shepard", salary: 3000, increase: false, id: 2 },
        { name: "Valerij Melguj", salary: 15000, increase: true, id: 3 },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (person) => {
    this.setState(({ data }) => {
      const newData = [...data];
      newData.push(person);
      return {
        data: newData,
      };
    });
  };

  render() {
    const { data } = this.state;
    const { deleteItem, addItem } = this;

    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployersList onDelete={deleteItem} data={data} />
        <EmployersAddForm onAdd={addItem} />
      </div>
    );
  }
}

export default App;
