import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';

import sampleFishes from '../sample-fishes';

class App extends React.Component {
	constructor() {
		super();

		this.addFish = this.addFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);

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

	loadSamples() {
		this.setState({
			fishes: sampleFishes
		});
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market"/>
					{
						Object
							.keys(this.state.fishes)
							.map(key => <Fish key={key} details={this.state.fishes[key] }/>)
					}
				</div>
				<Order />
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
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


// 	"Object.keys()" :
// 	Cannot loop over "objects", so if you wrap the data in "Object.keys()", it will give you an array of that data that you can loop over.



