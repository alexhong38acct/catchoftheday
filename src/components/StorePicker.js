import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	// constructor() {
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }

	goToStore(event) {
		event.preventDefault();
		console.log('You Changed the URL');
		// 	first grab the text from the box
		const storeId = this.storeInput.value;
		console.log(`Going to ${storeId}`);
		// 	second we're going to transition from / to /store/:storeId
		this.context.router.transitionTo(`/store/${storeId}`);
	}
	render() {
		return (
			<form className="store-selector" onSubmit={ (e) => this.goToStore(e) }>
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
				<button type="submit">Visit Store -></button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;





// 	NOTES :

// 	"defaultValue" :
// 	is a placeholder.
// 	
// 	"getFunName()" from helpers.js

// 	"ref" :
// 	to pass data from "input" to component.
// 	
// 	EX : 
// 	"ref={(input) => { this.storeInput = input }" :
// 	When this input "<input ... />" is rendered onto the page, its going to put a reference to the "<input> tag" on the StorePicker class itself.
// 	Test it : inspect StorePicker > console > $r.storeInput



// 	BINDING :
// 	"constructor" : line 5
// 	things that happen when the component is created.
// 	
// 	"super()" :
// 	References and add the React Component first, then things like "goToStore()".
// 	
// 	Instead of using hte constructor method to bind function to class, you can just bind the "goToStore function" to the "onSubmit" itself by :
// 	
// 	"<form className="store-selector" onSubmit={this.goToStore.bind(this) }>"
// 	
// 	can be rewritten :
// 	"<form className="store-selector" onSubmit={ (e) => this.goToStore(e) }>"


// 	CONTEXT : 
// 	Declare something at top level, and it will be made available to components within the nested tree.
// 	
// 	So to surface our "Router" from "index.js" which is the top level in the component tree, do :
// 	
// 	StorePicker.contextTypes = {
// 		router: React.PropTypes.object
// 	}
// 	
// 	This says, the StorePicker component expects something called a router and React makes it available. The method in router we want to use is "TransitionTo", to go to another page. So then we can do this : 
// 	"this.context.router.transitionTo(`/store/${storeId}`);"


































