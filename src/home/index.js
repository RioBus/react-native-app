import { connect } from 'react-redux';
import Home from './home';
import { openDrawer } from '../actions/index';

function bindActions(dispatch){
    return {
        openDrawer: ()=>dispatch(openDrawer())
    }
}

export default connect(null, bindActions)(Home);