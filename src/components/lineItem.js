import React from 'react';
import { View, Text } from 'react-native';
import { Icon, Grid, Col } from 'native-base';

const Style = {
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000'
    },
    description: {
        fontSize: 14,
        color: '#999'
    },
    star: {
        fontSize: 24,
        color: '#FFD700'
    },
    rightCol: {
        width: 20
    }
};

export default props => (
    <View>
        <Grid>
            <Col>
                <Text style={Style.title}>{props.line.line}</Text>
                <Text style={Style.description}>{props.line.description}</Text>
            </Col>
            <Col style={{ width: 20, marginLeft: 10, paddingVertical: 10 }}>
                <Icon name='ios-star-outline' style={Style.star} />
            </Col>
        </Grid>
    </View>
);
