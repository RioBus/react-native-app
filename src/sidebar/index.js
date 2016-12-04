import { connect } from 'react-redux';
import { closeDrawer, replaceOrPushRoute, setIndex } from '../actions/index';
import Sidebar from './sidebar';

function bindAction(dispatch) {
    return {
        closeDrawer: () => dispatch(closeDrawer()),
        replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
        setIndex: index => dispatch(setIndex(index))
    }
}

export default connect(null, bindAction)(Sidebar);