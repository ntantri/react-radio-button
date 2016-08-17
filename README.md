# react-radio-button
This is a use case for radio button group-able react component. ES6 based syntax.
Requires Bootstrap.

Example:

![Example Image](./example.png?raw=true "Radio Buttons")


Usage:
```javascript
import React, { Component, PropTypes } from 'react';

import RadioButtonGroup from '~/components/RadioButtonGroup';


export default class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	selectedValue: undefined,
    	radioOptions: [
	      { value: 'CreditCard', text: 'Credit Card' },
	      { value: 'DebitCard', text: 'Debit Card'}
	    ]
  	};
  }

  handleSelection(value) {
  	this.setState({selectedValue: value});
  }

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<h2> Welcome for the radio button example</h2>
					</div>
					<div className="col-xs-12">
						<RadioButtonGroup listOfItems={this.state.radioOptions} selectedItemCallback={(value) => this.handleSelection(value)}/>
					</div>
					<div className="col-xs-12">
						<h4>Selected radio button: <i>{this.state.selectedValue}</i></h4>
					</div>
				</div>
			</div>
		);
	}
}
```
