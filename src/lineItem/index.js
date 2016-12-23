import React from 'react';
import { View, Text } from 'react-native';
import { Icon, Grid, Col } from 'native-base';
import Style from './style';

export default props => {
    return (
        <View>
            <Grid>
                <Col>
                    <Text style={Style.title}>{props.line.line}</Text>
                    <Text style={Style.description}>{props.line.description}</Text>
                </Col>
                <Col style={{width:20, marginLeft:10, paddingVertical: 10}}>
                    <Icon name='ios-star-outline' style={Style.star} />
                </Col>
            </Grid>
        </View>
    );
};