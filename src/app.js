import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Drawer } from 'native-base';
import { BackAndroid, Platform, StatusBar } from 'react-native';
import { closeDrawer, popRoute } from './actions/index';
import Navigator from 'Navigator';
import router from './router';
import Sidebar from './sidebar/index';
import { statusBarColor } from "./themes/base";

export var globalNav = {};

Navigator.prototype.replaceWithAnimation = function (route) {
  const activeLength = this.state.presentedIndex + 1;
  const activeStack = this.state.routeStack.slice(0, activeLength);
  const activeAnimationConfigStack = this.state.sceneConfigStack.slice(0, activeLength);
  const nextStack = activeStack.concat([route]);
  const destIndex = nextStack.length - 1;
  const nextSceneConfig = this.props.configureScene(route, nextStack);
  const nextAnimationConfigStack = activeAnimationConfigStack.concat([nextSceneConfig]);

  const replacedStack = activeStack.slice(0, activeLength - 1).concat([route]);
  this._emitWillFocus(nextStack[destIndex]);
  this.setState({
    routeStack: nextStack,
    sceneConfigStack: nextAnimationConfigStack,
  }, () => {
    this._enableScene(destIndex);
    this._transitionTo(destIndex, nextSceneConfig.defaultTransitionVelocity, null, () => {
      this.immediatelyResetRouteStack(replacedStack);
    });
  });
};

const searchResultRegexp = /^search\/(.*)$/;

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

const drawerStyle  = { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3};
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
            var routes = this._navigator.getCurrentRoutes();

            if(routes[routes.length - 1].id == 'home' || routes[routes.length - 1].id == 'login') {
                // CLose the app
                return false;
            }
            else {
                this.popRoute();
                return true;
            }

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
                    barStyle="light-content"
                />
                <Navigator
                    ref={(ref) => this._navigator = ref}
                    configureScene={(route) => (Platform.OS === 'ios') ?
                        Navigator.SceneConfigs.PushFromRight : Navigator.SceneConfigs.FloatFromBottomAndroid}
                    initialRoute={{id: (Platform.OS === "android") ? 'splashscreen' : 'index', statusBarHidden: true}}
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