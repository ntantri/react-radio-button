import './index.css';

import React, { Component, PropTypes } from 'react';

export default class RadioButtonGroup extends Component {

  constructor(props) {
    super(props);
    this.listOfItems = props.listOfItems;
    this.state = {optionsVal: ''};
  }

  handleQueryOpChange(e) {
    this.setState({
      optionsVal: e.target.value
    });
    this.props.selectedItemCallback(e.target.value);
  }

  render() {
    const renderItems = (item) => {
      return (
          <label key={item.value}
            className={'btn-item radio-button-item ' + (this.state.optionsVal === item.value ? 'checked' : 'not-checked')}>
              <input type="radio" name="options" value={item.value}
                checked={this.state.optionsVal === item.value}
                onChange={(e) => this.handleQueryOpChange(e)} id={item.value} />
              <span className="radio-dot"></span>
              <span className="radio-button-item-word">{item.text}</span>
          </label>
        );
    };

    return (
      <div>
        {this.listOfItems.map((item) => renderItems(item))}
      </div>
    );
  }
}


RadioButtonGroup.propTypes = {
  listOfItems: PropTypes.array,
  selectedItemCallback: PropTypes.func.isRequired
};

