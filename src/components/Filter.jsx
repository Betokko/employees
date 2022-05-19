import React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const buttonsData = [
      { name: "all", label: "Все сотрудники" },
      { name: "rise", label: "На повышение" },
      { name: "over1000", label: "З/П больше 1000$" },
    ];
    const buttons = buttonsData.map((item) => {
      const active = this.props.filter === item.name;
      const clazz = active ? "btn-light" : "btn-outline-light";
      return (
        <button
          className={"btn " + clazz}
          name={item.name}
          type="button"
          key={item.name}
          onClick={() => this.props.onFilterSelect(item.name)}
        >
          {item.label}
        </button>
      );
    });

    return (
      <div className="btn-group" style={{ marginTop: "20px" }}>
        {buttons}
      </div>
    );
  }
}

export default Filter;
