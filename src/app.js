import React from 'react';
import { Navigator, Platform, BackAndroid, StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store';
import router from './router';
import Theme from './theme';

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
        return router(`${Platform.OS}-${route}`, navigator);
    }

    render() {
        const store = configureStore();
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <StatusBar
                        translucent={false}
                        backgroundColor={Theme.statusBarColor}
                        barStyle={Theme.statusBarStyle}
                    />
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
                </View>
            </Provider>
        );
    }

}