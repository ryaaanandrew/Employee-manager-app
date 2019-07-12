import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './router';
import reducers from './reducers';

class App extends Component {
	componentDidMount() {
		const firebaseConfig = {
			apiKey: 'AIzaSyAg3SP6rGhPLxy9z02hAI9ax29oKZMggtc',
			authDomain: 'employee-manager-fc4fc.firebaseapp.com',
			databaseURL: 'https://employee-manager-fc4fc.firebaseio.com',
			projectId: 'employee-manager-fc4fc',
			storageBucket: '',
			messagingSenderId: '337046196206',
			appId: '1:337046196206:web:b6ffde3fb865dcd9'
		};

		firebase.initializeApp(firebaseConfig);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
