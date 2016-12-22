import { connect } from 'react-redux';
import Second from './second';
import { openDrawer, popRoute } from '../actions';

function bindActions(dispatch){
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindActions)(Second);