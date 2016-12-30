import React, { Component } from 'react';
import { ListView } from 'react-native';
import {
    Container, Header, Content,
    Title, Button, Icon,
    ListItem, Spinner, InputGroup,
    Input
} from 'native-base';

import { connect } from 'react-redux';

import { openDrawer, pushNewRoute, downloadLines } from '../actions';
import theme from '../theme';
import { LineItem } from '../components';

class Search extends Component {

    state = { toggleSearch: false, text: '' };

    componentWillMount() {
        this.props.downloadLines();
    }

    get dataSource() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id });
        return ds.cloneWithRows(this.props.lines);
    }

    renderHeader() {
        if (this.state.toggleSearch) {
            return (
                <Header searchBar rounded>
                    <InputGroup>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-close" onPress={() => this.setState({ toggleSearch: false, text: '' })} />
                    </InputGroup>
                    <Button transparent>
                        Search
                    </Button>
                </Header>
            );
        }

        return (
            <Header>
                <Button transparent>
                    <Icon name='md-menu' onPress={this.props.openDrawer} />
                </Button>
                <Title>Rio Bus</Title>
                <Button transparent onPress={() => this.setState({ toggleSearch: true })}>
                    <Icon name='md-search' />
                </Button>
            </Header>
        );
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
                {this.renderHeader()}

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
