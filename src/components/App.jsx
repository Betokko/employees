import React from "react";

import Info from "./Info";
import SearchPanel from "./SearchPanel";
import Filter from "./Filter";
import EmployeesList from "./EmployeesList";
import EmployeesAddForm from "./EmployeesAddForm";

import "./styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Lisa", salary: 1000, increase: false, rise: true, id: 1 },
        { name: "Ann", salary: 1500, increase: true, rise: false, id: 2 },
        { name: "Mari", salary: 1200, increase: false, rise: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return { data: data.filter((obj) => obj.id !== id) };
    });
  };

  handleAddSubmit = (newEmployee) => {
    if (newEmployee.name && newEmployee.salary) {
      newEmployee.id = new Date();
      newEmployee.increase = false;
      newEmployee.rise = false;
      this.setState({ data: [...this.state.data, newEmployee] });
    }
  };

  handleToggleIncrease = (id) => {
    this.setState({
      data: this.state.data.map((obj) => {
        if (obj.id === id) {
          return { ...obj, increase: !obj.increase };
        }
        return obj;
      }),
    });
  };

  handleToggleRise = (id) => {
    this.setState({
      data: this.state.data.map((obj) => {
        if (obj.id === id) {
          return { ...obj, rise: !obj.rise };
        }
        return obj;
      }),
    });
  };

  searchEmp = (items, term) => {
    if (!term.length) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  handleUpdateSearch = (term) => {
    this.setState({ term: term });
  };


  filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);
      case "over1000":
        return items.filter((item) => item.salary >= 1000);
      default:
        return items;
    }
  };

  handleFilterSelect = (filter) => {
    this.setState({filter})
  }

  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((i) => i.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="App">
        <Info employees={employees} increased={increased} />

        <div className="SearchPanel">
          <SearchPanel onUpdateSearch={this.handleUpdateSearch} />
          <Filter filter={filter} onFilterSelect={this.handleFilterSelect}/>
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.handleToggleIncrease}
          onToggleRise={this.handleToggleRise}
        />
        <EmployeesAddForm onAddSubmit={this.handleAddSubmit} />
      </div>
    );
  }
}

export default App;
