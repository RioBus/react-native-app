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
        fontSize: 28,
        color: '#FFD700'
    },
    rightCol: {
        width: 28,
        marginHorizontal: 10,
        paddingVertical: 10
    }
};

export default props => (
    <View>
        <Grid>
            <Col>
                <Text style={Style.title}>{props.line.line}</Text>
                <Text style={Style.description}>{props.line.description}</Text>
            </Col>
            <Col style={Style.rightCol}>
                <Icon name='ios-star-outline' style={Style.star} />
            </Col>
        </Grid>
    </View>
);