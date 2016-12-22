import { connect } from 'react-redux';
import { closeDrawer, setIndex, replaceRoute } from '../actions/index';
import Sidebar from './sidebar';

function bindAction(dispatch) {
    return {
        closeDrawer: () => dispatch(closeDrawer()),
        replaceRoute: route => dispatch(replaceRoute(route)),
        setIndex: index => dispatch(setIndex(index))
    }
}

export default connect(null, bindAction)(Sidebar);