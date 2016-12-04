import { connect } from 'react-redux';
import Second from './second';
import { openDrawer } from '../actions/index';

function bindActions(dispatch){
    return {
        openDrawer: ()=>dispatch(openDrawer())
    }
}

export default connect(null, bindActions)(Second);