import React from 'react';
import { ListView, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { downloadLines } from '../actions';
import { LineItem } from '../components';
import { Header, Icon } from '../common';

class Search extends React.Component {

    state = { toggleSearch: false, text: '' };

    style = {
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

    componentWillMount() {
        this.props.downloadLines();
    }

    get dataSource() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id });
        return ds.cloneWithRows(this.props.lines.slice(0, 10));
    }

    renderHeader() {
        return (
            <Header>
                <Header.LeftButton>
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
        return <LineItem key={line.line} line={line} />;
    }

    renderContent() {
        if (this.props.lines.length === 0) return (
            <View style={this.style.loadingContainer}>
                <ActivityIndicator size="large" style={this.style.loadingIndicator} />
            </View>
        );

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
            <View style={{ flex: 1 }}>
                {this.renderHeader()}
                {this.renderContent()}
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        downloadLines: () => dispatch(downloadLines())
    };
}

function mapStateToProps(state) {
    return {
        lines: state.lines.lines
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
