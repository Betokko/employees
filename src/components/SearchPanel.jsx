import React from "react";

import "./styles/SearchPanel.css";

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }
  onUpdateSearch = (evt) => {
    this.setState({ term: evt.target.value });
    this.props.onUpdateSearch(evt.target.value);
  };
  render() {
    return (
      <input
        value={this.state.term}
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        onChange={this.onUpdateSearch}
      />
    );
  }
}

export default SearchPanel;
