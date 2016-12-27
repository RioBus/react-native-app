import React, { Component } from 'react';
import { Container, Header, Content, Text, Title, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import { openDrawer } from '../actions';
import theme from '../themes';

class Third extends Component {

    render() {
        return (
            <Container theme={theme}>
                <Header>
                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name='md-menu' />
                    </Button>
                    <Title>Third page</Title>
                </Header>
                <Content>
                    <Text>Came here through side drawer!</Text>
                </Content>
            </Container>
        );
    }
}

function bindActions(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer())
    };
}

export default connect(null, bindActions)(Third);
