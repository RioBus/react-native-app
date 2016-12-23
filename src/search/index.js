import { connect } from 'react-redux';
import Search from './search';
import { openDrawer, pushNewRoute, downloadLines } from '../actions';

function mapDispatchToProps(dispatch){
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        pushRoute: route => dispatch(pushNewRoute(route)),
        loadLines: () => dispatch(downloadLines())
    }
}

function mapStateToProps(state) {
    return {
        lines: state.lines.lines
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);