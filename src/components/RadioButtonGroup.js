import React, { Component, PropTypes } from 'react';


class RadioButtonGroup extends Component {

  constructor(props) {
    super(props);
    this.listOfItems = props.listOfItems;
    this.selectedItemCallback = props.selectedItemCallback;
    this.state = {optionsVal: ''};
  }

  handleQueryOpChange(e) {
    this.setState({
      optionsVal: e.target.value
    });
    this.selectedItemCallback(e.target.value);
  }

  render() {
    const renderItems = (item) => {
      return (
          <label htmlFor={item.value} key={item.value}
            className={'btn btn-default radio-button-item ' + (this.state.optionsVal === item.value ? 'checked' : '')}>
              <input type="radio" name="options" value={item.value}
                checked={this.state.optionsVal === item.value}
                onChange={this.handleQueryOpChange.bind(this)} id={item.value} />
              <span className="radio-dot"></span>
              <span className="radio-button-item-word">{item.text}</span>
          </label>
        );
    };

    return (
      <div data-toggle="buttons">
        {this.listOfItems.map((item) => renderItems(item))}
      </div>
    );
  }
}


RadioButtonGroup.propTypes = {
  listOfItems: PropTypes.array,
  selectedItemCallback: PropTypes.func.isRequired
};


export default RadioButtonGroup;