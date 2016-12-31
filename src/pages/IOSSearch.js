import React from 'react';
import { ListView, View, ActivityIndicator, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';

import { downloadLines, selectLine } from '../actions';
import { IOSLineItem } from '../components';
import { CardView, Header, Icon, Touchable } from '../common';

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
    searchbar: {
        borderRadius: 4,
        paddingHorizontal: 8,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchIcon: {
        flex: 1,
        color: '#999999',
        size: 18
    },
    searchBox: {
        height: 32,
        flex: 8,
        marginLeft: 8,
        fontSize: 16
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
        this.props.downloadLines();
    }

    get dataSource() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id });
        return ds.cloneWithRows(this.props.lines);
    }

    onPressLine(line) {
        this.props.selectLine(line);
        this.props.navigator.push('map');
    }

    renderHeader() {
        return (
            <Header>
                <Header.Custom>
                    <CardView style={Style.searchbar}>
                        <Icon
                            name="search"
                            style={Style.searchIcon}
                            size={Style.searchIcon.size}
                            color={Style.searchIcon.color}
                        />
                        <TextInput
                            style={Style.searchBox}
                            onChangeText={text => this.setState({ text })}
                            value={this.state.text}
                            placeholder="Digite o nome da linha"
                            autoCorrect={false}
                            autoFocus
                        />
                        <Touchable onPress={() => this.setState({ text: '' })}>
                            <Icon
                                name="close-circle"
                                style={Style.searchIcon}
                                size={Style.searchIcon.size}
                                color={Style.searchIcon.color}
                            />
                        </Touchable>
                    </CardView>
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
                    pageSize={10}
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
        selectLine: (line) => dispatch(selectLine(line)),
        downloadLines: () => dispatch(downloadLines())
    };
}

function mapStateToProps(state) {
    return {
        lines: state.lines.all
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
