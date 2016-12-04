import React, { Component } from 'react';
import {Content, Text, List, ListItem } from 'native-base';
import styles from './style';

export default class Sidebar extends Component {

    navigateTo(route) {
        this.props.closeDrawer();
        this.props.setIndex(undefined);
        this.props.replaceOrPushRoute(route);
    }

    render() {
        return (
            <Content style={styles.sidebar} >
                <List>
                    <ListItem button onPress={() => this.navigateTo('home')} >
                        <Text>Home</Text>
                    </ListItem>
                    <ListItem button onPress={() => this.navigateTo('second')} >
                        <Text>Second Page</Text>
                    </ListItem>
                </List>
            </Content>
        );
    }
}