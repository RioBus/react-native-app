import React, { Component } from 'react';
import { ListView } from 'react-native';
import {
    Container, Header, Content,
    Title, Button, Icon,
    ListItem, Spinner
} from 'native-base';

import { connect } from 'react-redux';

import { openDrawer, pushNewRoute, downloadLines } from '../actions';
import theme from '../themes/base';
import { LineItem } from '../components';

class Search extends Component {

    componentWillMount() {
        this.props.downloadLines();
    }

    get dataSource() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id });
        return ds.cloneWithRows(this.props.lines);
    }

    renderRow(line) {
        return <ListItem key={line.line}><LineItem line={line} /></ListItem>;
    }

    renderContent() {
        if (this.props.lines.length === 0) return <Spinner color="blue" />;
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
                initialListSize={this.props.lines.length}
                pageSize={10}
            />
        );
    }

    render() {
        return (
            <Container theme={theme}>
                <Header>
                    <Button transparent>
                        <Icon name='md-menu' onPress={this.props.openDrawer} />
                    </Button>
                    <Title>Rio Bus</Title>
                    <Button transparent>
                        <Icon name='md-search' onPress={this.props.openDrawer} />
                    </Button>
                </Header>
                <Content>
                    {this.renderContent()}
                </Content>
            </Container>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        pushRoute: route => dispatch(pushNewRoute(route)),
        downloadLines: () => dispatch(downloadLines())
    };
}

function mapStateToProps(state) {
    return {
        lines: state.lines.lines
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
