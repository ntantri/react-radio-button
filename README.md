# react-radio-button
[![npm:](https://img.shields.io/badge/npm-latest-green.svg)](https://www.npmjs.com/packages/react-radio-button)
This react component is a div based radio button group. Simple to use and access.


How to install:
```sh
npm install react-radio-button
```


Example:

![Example Image](https://lh3.googleusercontent.com/-CZHBUmhCH4w/WB3G1Gi_ufI/AAAAAAAAF0Q/-37gi3zBF9kBdCIgqU5RssPhp8wLFJregCJoC/w239-h45-p-rw/example.png?raw=true "Radio Buttons")


Usage:
```javascript
import React, { Component, PropTypes } from 'react';

import RadioButtonGroup from 'react-radio-button';

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

###props to the ```<RadioButtonGroup listOfItems={<items>} selectedItemCallback={callbck} />```

###listOfItems (PropTypes.array):
  The items that need to appear on the radio items, is in the format (array):
    ```javascript
    radioOptions: [
        { value: 'CreditCard', text: 'Credit Card' },
	    { value: 'DebitCard', text: 'Debit Card'}
    ]
    ```
    where,
    ```value``` is the value we get on radio button selection
    ```text``` is the display of the radio button

###selectedItemCallback (PropTypes.func)
  The callback that is invoked when a radio button is clicked (function):
  ```(value) => handleSelection(value) ```
  where,
  ```javascript
    handleSelection(value) {  //value is the selected value, like "CreditCard" or "DebitCard"
	    this.setState({selectedValue: value});
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
