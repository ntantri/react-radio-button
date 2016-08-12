import React, { Component, PropTypes } from 'react';

import RadioButtonGroup from './RadioButtonGroup';


default export class App extends Component {
	constructor(props) {
    super(props);
    this.radioOptions = [
      { value: 'CreditCard', text: 'Credit Card' },
      { value: 'DebitCard', text: 'Debit Card'},
      { value: 'DebitCard', text: 'Debit Card'}
    ];
  }

	render() {
		<div>
			<h2> Welcome for the radio button example</h2>
			<RadioButtonGroup listOfItems=/>
			<div>
				<h4>Selected radio button: </h4>
			</div>
		</div>
	}
}