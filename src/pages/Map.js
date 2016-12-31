import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Header, Icon } from '../common';
import { getSelectedLine } from '../actions';

const Style = {
    mapContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    map: { ...StyleSheet.absoluteFillObject }
};

class Map extends React.Component {

    componentWillMount() {
        this.props.getSelectedLine();
    }

    onPressBackButton() {
        this.props.navigator.pop();
    }

    get Title() {
        const { selectedLine } = this.props;
        return (selectedLine.line) ? selectedLine.line : '';
    }

    renderHeader() {
        return (
            <Header>
                <Header.LeftButton onPress={() => this.onPressBackButton()}>
                    <Icon name="arrow-back" color="white" />
                </Header.LeftButton>
                <Header.Title>{this.Title}</Header.Title>
            </Header>
        );
    }

    renderContent() {
        return (
            <View style={Style.mapContainer}>
                <MapView
                    style={Style.map}
                    initialRegion={{
                        latitude: -22.9083,
                        longitude: -43.1964,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1,
                    }}
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
        getSelectedLine: (query) => dispatch(getSelectedLine(query))
    };
}

function mapStateToProps(state) {
    return {
        selectedLine: state.lines.selectedLine
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
