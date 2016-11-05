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

##Customing button colors (The default colors are shown below):

Add these to your custom css file and should be ideally changing the color for which ever color scheme you use.


###With not selected state:

```css
.not-checked {
    background-color: #ffffff !important;
    border-color: #ccc !important;
}
```

###With selected state:

```css
.checked {
    background-color: #7d9c47 !important;
}

.radio-button-item > input[type="radio"]:checked+span:after {
  background-color: #426C2A !important;
}

.radio-button-item > input[type="radio"]:checked+span+span{
    color: #fff !important;
}
```


###On hover, the color to change:

```css
.radio-button-item:hover .radio-dot:before {
    border-color: #bdde85 !important;
}

.radio-button-item:hover .radio-dot:after {
    background-color: #bef65b !important;
}
```

Once added to a custom css file (example: test.css), do import the same as:

```javascript
import React, { Component, PropTypes } from 'react';

import RadioButtonGroup from '~/components/RadioButtonGroup';
import './test.css'  // Relative path
```