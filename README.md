# react-radio-button
This is a use case for radio button group-able react component. ES6 based syntax.
Requires Bootstrap.

Example:

![Example Image](./example.png?raw=true "Radio Buttons")


Usage:
```javascript

class OptionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {selectedContract: ''};
	}

	render() {
		const radioOptions = [
			{ value: 'agree', text: 'I Agree' }, 
			{ value: 'disagree', text: 'I Disagree'}
		];
		const renderContract = (value) => {
			this.setState({selectedContract: value});
		};

		return (
			<div>
				<form method="Post" action="/save">
					<div><input type="text" ref="txtName"></div>
    				<RadioButtonGroup listOfItems={radioOptions} selectedItemCallback={renderContract.bind(this)} />
    			</form>
    		</div>
    	);
	}
}
```
