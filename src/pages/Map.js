import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Header, Icon } from '../common';
import { loadBuses } from '../actions';

const Style = {
    mapContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    map: { ...StyleSheet.absoluteFillObject }
};

class Map extends React.Component {

    state = { line: {} };

    componentWillMount() {
        const { line } = this.props.args;
        this.setState({ line });
        this.props.loadBuses(line.line);
    }

    onPressBackButton() {
        this.props.navigator.pop();
    }

    get Title() {
        return this.state.line.line;
    }

    renderHeader() {
        return (
            <Header noShadow>
                <Header.LeftButton onPress={() => this.onPressBackButton()}>
                    <Icon name="arrow-back" color="white" />
                </Header.LeftButton>
                <Header.Title>{this.Title}</Header.Title>
            </Header>
        );
    }

    renderMarker(bus) {
        return (
            <MapView.Marker
                coordinate={{ latitude: bus.latitude, longitude: bus.longitude }}
                title={bus.line}
                key={bus.order}
                description={bus.order}
            />
        );
    }

    renderMarkers() {
        if (this.props.buses.length === 0) return;
        return this.props.buses.map(this.renderMarker);
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
                    showsScale={false}
                    showsIndoors={false}
                    toolbarEnabled={false}
                    loadingEnabled
                >
                    {this.renderMarkers()}
                </MapView>
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
        loadBuses: (query) => dispatch(loadBuses(query))
    };
}

function mapStateToProps(state) {
    return {
        buses: state.buses.all
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
