import React, { Component } from 'react';
import { Container, Header, Content, Text, Title, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import { openDrawer, popRoute } from '../actions';
import theme from '../theme';

class Second extends Component {

    render() {
        return (
            <Container theme={theme}>
                <Header>
                    <Button transparent onPress={this.props.popRoute}>
                        <Icon name='md-arrow-back' />
                    </Button>
                    <Title>Second page</Title>
                </Header>
                <Content>
                    <Text>Did transitioned until here!</Text>
                </Content>
            </Container>
        );
    }
}


function MapActionsToProps(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute())
    };
}

export default connect(null, MapActionsToProps)(Second);
