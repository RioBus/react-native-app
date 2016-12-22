import React, { Component } from 'react';
import { BackAndroid, Platform, StatusBar, Navigator } from 'react-native';
import { connect } from 'react-redux';
import { Drawer } from 'native-base';
import { closeDrawer, popRoute } from './actions/index';
import { DEFAULT_ROUTE, router } from './router';
import Sidebar from './sidebar/index';
import { statusBarColor, statusBarStyle } from "./themes/base";

export var globalNav = {};

const reducerCreate = params => {
    const defaultReducer = Reducer(params);
    return (state, action) => {
        var currentState = state;

        if(currentState){
          while (currentState.children){
            currentState = currentState.children[currentState.index]
          }
        }

        return defaultReducer(state, action);
    }
};

class AppNavigator extends Component {
    constructor(props){
        super(props);

    }

    componentDidMount() {
        globalNav.navigator = this._navigator;

        this.props.store.subscribe(() => {
            if(this.props.store.getState().drawer.drawerState == 'opened')
                this.openDrawer();

            if(this.props.store.getState().drawer.drawerState == 'closed')
                this._drawer.close();
        });

        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (this._navigator && this._navigator.getCurrentRoutes().length > 1) {
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
        this._drawer.open();
    }

    closeDrawer() {
        if(this.props.store.getState().drawer.drawerState == 'opened') {
            this._drawer.close();
            this.props.closeDrawer();
        }
    }

    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                type="overlay"
                content={<Sidebar navigator={this._navigator} />}
                tapToClose={true}
                acceptPan={false}
                onClose={() => this.closeDrawer()}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}>
                <StatusBar
                    backgroundColor={statusBarColor}
                    barStyle={statusBarStyle}
                />
                <Navigator
                    ref={(ref) => this._navigator = ref}
                    configureScene={(route) => (Platform.OS === 'ios') ?
                        Navigator.SceneConfigs.PushFromRight : Navigator.SceneConfigs.FloatFromBottomAndroid}
                    initialRoute={{id: DEFAULT_ROUTE, statusBarHidden: true}}
                    renderScene={this.renderScene}
                  />
            </Drawer>
        );


    }

    renderScene(route, navigator) {
        return router(route.id, navigator);
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: () => dispatch(closeDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

const mapStateToProps = (state) => {
  return {
    drawerState: state.drawer.drawerState
  }
}

export default connect(mapStateToProps, bindAction) (AppNavigator);