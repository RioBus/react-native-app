import React, { Component } from 'React';
import { Provider } from 'react-redux';
import configureStore from './configure/store';
import App from './app';

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