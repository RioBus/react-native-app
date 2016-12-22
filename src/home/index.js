import { connect } from 'react-redux';
import Home from './home';
import { openDrawer, pushNewRoute } from '../actions';

function bindActions(dispatch){
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        pushRoute: route => dispatch(pushNewRoute(route)),
    }
}

export default connect(null, bindActions)(Home);