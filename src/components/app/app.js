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
        { name: "John Smith", salary: 800, increase: true, rise: true, id: 1 },
        {
          name: "Alex Shepard",
          salary: 3000,
          increase: false,
          rise: false,
          id: 2,
        },
        {
          name: "Valerij Melguj",
          salary: 15000,
          increase: true,
          rise: false,
          id: 3,
        },
      ],
      term: "",
      filter: "all",
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
      const newData = [...data]; //иммутабельность, мы не изменяем существующий массив, а создаем новый
      newData.push(person);
      return {
        data: newData,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  /* onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    }));
  }; */

  /* onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, rise: !item.rise };
        }
        return item;
      }),
    }));
  }; */

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term: term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => {
          return item.rise;
        });
      case "moreThen1000":
        return items.filter((item) => {
          return item.salary > 1000;
        });
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const {
      deleteItem,
      addItem,
      onToggleProp,
      onUpdateSearch,
      searchEmp,
      filterPost,
      onFilterSelect
    } = this;

    const visibleData = filterPost(searchEmp(data, term), filter);
    return (
      <div className="app">
        <AppInfo data={data} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={onFilterSelect}/>
        </div>
        <EmployersList
          onDelete={deleteItem}
          data={visibleData}
          onToggleProp={onToggleProp}
        />
        <EmployersAddForm onAdd={addItem} />
      </div>
    );
  }
}

export default App;
