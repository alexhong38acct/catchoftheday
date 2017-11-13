import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

import Fish from './Fish';

class App extends React.Component {
	constructor() {
		super();
		// 	getinitialState
		this.state = {
			fishes: {},
			order: {}
		};
	}

	addFish(fish) {
		// 	update our state

		//  set state
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market"/>
				</div>
				<Order />
				<Inventory />
			</div>
		)
	}
}

export default App;









// 	NOTES :
// 	
// 	"tagline" : attr added to Header Component, "tagline" will be passed down to "Header.js" as "props". 

// 	STATES :
// 	Add a "fishes" and "order" initial state :
// 	
// 	constructor() {
// 		super();
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}








