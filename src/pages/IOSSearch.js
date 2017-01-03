import React from 'react';
import { ListView, View, ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';

import { loadLines } from '../actions';
import { IOSLineItem } from '../components';
import { Header, Searchbar, Touchable } from '../common';

const Style = {
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingIndicator: {
        alignSelf: 'center',
        margin: 10
    },
    rowHeader: {
        backgroundColor: '#E9E9E9',
        height: 25,
        justifyContent: 'center',
        paddingLeft: 10
    },
    rowHeaderText: {
        fontWeight: 'bold'
    }
};

class Search extends React.Component {

    state = { text: '' };

    componentWillMount() {
        this.props.loadLines();
    }

    onPressLine(line) {
        this.props.navigator.push({ id: 'map', args: { line } });
    }

    get dataSource() {
        let lines = this.props.lines;
        const text = this.state.text;
        if (this.state.text.length > 0) {
            lines = lines.filter(({ line, description }) => 
                line.toLowerCase().indexOf(text.toLowerCase()) > -1
                || description.toLowerCase().indexOf(text.toLowerCase()) > -1
            );
        }
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id });
        return ds.cloneWithRows(lines);
    }

    renderHeader() {
        return (
            <Header>
                <Header.Custom>
                    <Searchbar
                        onChangeText={text => this.setState({ text })}
                        placeholder="Digite o nome da linha"
                        autoFocus
                    />
                </Header.Custom>
            </Header>
        );
    }

    renderRowHeader(text) {
        return (
            <View style={Style.rowHeader}>
                <Text style={Style.rowHeaderText}>{text}</Text>
            </View>
        );
    }

    renderRow(line) {
        return (
            <Touchable onPress={() => this.onPressLine(line)}>
                <IOSLineItem key={line.line} line={line} />
            </Touchable>
        );
    }

    renderContent() {
        if (this.props.lines.length === 0) {
            return (
                <View style={Style.loadingContainer}>
                    <ActivityIndicator size="large" style={Style.loadingIndicator} />
                </View>
            );
        }

        return (
            <View style={{ flex: 1 }}>
                {this.renderRowHeader(`Todas as linhas (${this.props.lines.length} online)`)}
                <ListView
                    dataSource={this.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    initialListSize={this.props.lines.length}
                    pageSize={this.props.lines.length}
                />
            </View>
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
        loadLines: () => dispatch(loadLines())
    };
}

function mapStateToProps(state) {
    return {
        lines: state.lines.all
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
