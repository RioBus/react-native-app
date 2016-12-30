import React from 'react';
import { Navigator, Platform, BackAndroid } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store';
import router from './router';

export default class App extends React.Component {

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
                this.navigator.pop();
                return true;
            }
            return false;
        });
    }

    renderScene(route, navigator) {
        return router(route, navigator);
    }

    render() {
        const store = configureStore();
        return (
            <Provider store={store}>
                <Navigator
                    store={store}
                    ref={ref => { this.navigator = ref; }}
                    initialRoute={{}}
                    renderScene={this.renderScene}
                    configureScene={() => (Platform.OS === 'ios') ?
                        Navigator.SceneConfigs.PushFromRight :
                        Navigator.SceneConfigs.FloatFromBottomAndroid
                    }
                />
            </Provider>
        );
    }

}