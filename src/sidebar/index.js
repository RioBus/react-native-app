import React, { Component } from 'react';
import { Content, Text, List, ListItem } from 'native-base';
import { connect } from 'react-redux';
import { closeDrawer, setIndex, replaceRoute } from '../actions';
import styles from './style';

class Sidebar extends Component {

    navigateTo(route) {
        this.props.closeDrawer();
        this.props.replaceRoute(route);
    }

    render() {
        return (
            <Content style={styles.sidebar} >
                <List>
                    <ListItem button onPress={() => this.navigateTo('home')} >
                        <Text>Home</Text>
                    </ListItem>
                    <ListItem button onPress={() => this.navigateTo('third')} >
                        <Text>Third Page</Text>
                    </ListItem>
                </List>
            </Content>
        );
    }
}

function mapActionsToProps(dispatch) {
    return {
        closeDrawer: () => dispatch(closeDrawer()),
        replaceRoute: route => dispatch(replaceRoute(route)),
        setIndex: index => dispatch(setIndex(index))
    };
}

export default connect(null, mapActionsToProps)(Sidebar);
