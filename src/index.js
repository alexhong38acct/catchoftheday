import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';

import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';


const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={StorePicker} />
				<Match pattern="/store/:storeId" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(<Root/>, document.querySelector('#main'));











// 	NOTE : 
 	
// 	To display this to the browser, we need "React DOM".


// 	REACT ROUTER : 
// 	
// 	"Match" :
// 	You can use "Match" as a sidebar by popping it in and if the url is a certain, then show it.
// 	
// 	"Miss" :
// 	Handles "Page not found".