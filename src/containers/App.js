import React, { Component, PropTypes } from 'react';

import RadioButtonGroup from '~/components/RadioButtonGroup';


export default class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	radioOptions: [
	      { value: 'CreditCard', text: 'Credit Card' },
	      { value: 'DebitCard', text: 'Debit Card'},
	      { value: 'DebitCard', text: 'Debit Card'}
	    ]
  	};
  }

	render() {
		return (
			<div>
				<h2> Welcome for the radio button example</h2>
				<RadioButtonGroup listOfItems={this.state.radioOptions}/>
				<div>
					<h4>Selected radio button: </h4>
				</div>
			</div>
		);
	}
}