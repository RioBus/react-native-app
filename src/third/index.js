import { connect } from 'react-redux';
import Third from './third';
import { openDrawer } from '../actions';

function bindActions(dispatch){
    return {
        openDrawer: ()=>dispatch(openDrawer())
    }
}

export default connect(null, bindActions)(Third);