import React, { PureComponent } from "react";
import "./AutoCompleteText.css";

export default class AutoCompleteText extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: ""
    };
  }

  onTextChanged = e => {
    const { items } = this.props;
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = items.sort().filter(v => regex.test(v));
    }
    this.setState({ suggestions, text: value });
  };

  suggestionsSelected(value) {
    this.setState({ text: value, suggestions: [] });
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    } else {
      return (
        <ul>
          {suggestions.map((item, index) => (
            <li key={index} onClick={() => this.suggestionsSelected(item)}>
              {item}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="AutoComplete">
        <input
          value={this.state.text}
          type="text"
          onChange={this.onTextChanged}
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}
