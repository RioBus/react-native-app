import React, { Component } from 'react';
import { BackAndroid, Platform, StatusBar, Navigator } from 'react-native';
import { connect } from 'react-redux';
import { Drawer } from 'native-base';
import { closeDrawer, popRoute } from './actions';
import { DEFAULT_ROUTE, router } from './router';
import { statusBarColor, statusBarStyle } from './themes';
import Sidebar from './sidebar';

export const globalNav = {};

class AppNavigator extends Component {

    componentDidMount() {
        globalNav.navigator = this.navigator;

        this.props.store.subscribe(() => {
            if (this.props.store.getState().drawer.drawerState === 'opened') this.openDrawer();
            if (this.props.store.getState().drawer.drawerState === 'closed') this.drawer.close();
        });

        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
                this.popRoute();
                return true;
            }
            // Closes the app
            return false;
        });
    }

    popRoute() {
        this.props.popRoute();
    }

    openDrawer() {
        this.drawer.open();
    }

    closeDrawer() {
        if (this.props.store.getState().drawer.drawerState === 'opened') {
            this.drawer.close();
            this.props.closeDrawer();
        }
    }

    renderScene(route, navigator) {
        return router(route.id, navigator);
    }

    render() {
        return (
            <Drawer
                ref={ref => { this.drawer = ref; }}
                type="overlay"
                content={<Sidebar navigator={this.navigator} />}
                tapToClose={true}
                acceptPan={false}
                onClose={() => this.closeDrawer()}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}
            >
                <StatusBar
                    backgroundColor={statusBarColor}
                    barStyle={statusBarStyle}
                />
                <Navigator
                    ref={ref => { this.navigator = ref; }}
                    configureScene={() => (Platform.OS === 'ios') ?
                        Navigator.SceneConfigs.PushFromRight :
                        Navigator.SceneConfigs.FloatFromBottomAndroid
                    }
                    initialRoute={{ id: DEFAULT_ROUTE, statusBarHidden: true }}
                    renderScene={this.renderScene}
                />
            </Drawer>
        );
    }
}

function mapActionsToProps(dispatch) {
    return {
        closeDrawer: () => dispatch(closeDrawer()),
        popRoute: () => dispatch(popRoute())
    };
}

const mapStateToProps = state => {
    return {
        drawerState: state.drawer.drawerState
    };
};

export default connect(mapStateToProps, mapActionsToProps)(AppNavigator);
