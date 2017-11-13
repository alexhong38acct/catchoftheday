import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

import Fish from './Fish';

class App extends React.Component {
	constructor() {
		super();

		this.addFish = this.addFish.bind(this);
		// 	getinitialState
		this.state = {
			fishes: {},
			order: {}
		};
	}

	addFish(fish) {
		// 	update our state
		const fishes = {...this.state.fishes};
		// 	add in our new fish
		const timestamp = Date.now();
		fishes[`fish-${timestamp}`] = fish; 	// "fish" coming from AddFishForm.js

		//  set state
		this.setState({ fishes: fishes })
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market"/>
				</div>
				<Order />
				<Inventory addFish={this.addFish} />
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

// 	Pass function down to "Inventory"
// 	<Inventory addFish={this.addFish} />






