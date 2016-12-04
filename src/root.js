import React, { Component } from 'React';
import App from './app';
import configureStore from './configure/store';
import { Provider } from 'react-redux';

export default class Root extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            store: configureStore(()=> this.setState({isLoading: false})),
        };
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <App store={this.state.store} />
            </Provider>
        );
    }
}