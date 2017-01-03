import React from 'react';
import { ListView, View, ActivityIndicator, DrawerLayoutAndroid } from 'react-native';
import { connect } from 'react-redux';

import { loadLines } from '../actions';
import { AndroidLineItem } from '../components';
import { Header, Icon, Touchable } from '../common';
import Drawer from './Drawer';

class Search extends React.Component {

    state = { toggleSearch: false, text: '' };

    componentWillMount() {
        this.props.loadLines();
    }

    onPressMenuButton() {
        this.drawer.openDrawer();
    }

    onPressLine(line) {
        this.props.navigator.push({ id: 'map', args: { line } });
    }

    get style() {
        return {
            loadingContainer: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            },
            loadingIndicator: {
                alignSelf: 'center',
                margin: 10
            }
        };
    }

    get dataSource() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id });
        return ds.cloneWithRows(this.props.lines);
    }

    renderHeader() {
        return (
            <Header>
                <Header.LeftButton onPress={() => this.onPressMenuButton()}>
                    <Icon name='menu' color="#FFFFFF" />
                </Header.LeftButton>
                <Header.Title>Rio Bus</Header.Title>
                <Header.RightButton onPress={() => this.setState({ toggleSearch: true })}>
                    <Icon name='search' color="#FFFFFF" />
                </Header.RightButton>
            </Header>
        );
    }

    renderRow(line) {
        return (
            <Touchable onPress={() => this.onPressLine(line)}>
                <AndroidLineItem key={line.line} line={line} />
            </Touchable>
        );
    }

    renderContent() {
        if (this.props.lines.length === 0) {
            return (
                <View style={this.style.loadingContainer}>
                    <ActivityIndicator size="large" style={this.style.loadingIndicator} />
                </View>
            );
        }

        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow.bind(this)}
                initialListSize={this.props.lines.length}
                pageSize={this.props.lines.length}
            />
        );
    }

    render() {
        return (
            <DrawerLayoutAndroid
                ref={ref => { this.drawer = ref; }}
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={
                    () => <Drawer drawer={this.drawer} navigator={this.props.navigator} />
                }
            >
            <View style={{ flex: 1 }}>
                {this.renderHeader()}
                {this.renderContent()}
            </View>
            </DrawerLayoutAndroid>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadLines: () => dispatch(loadLines())
    };
}

function mapStateToProps(state) {
    return {
        lines: state.lines.all
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
