import React, { Component } from 'react';
import {
    Container, Header, Content,
    Text, Title, Button,
    Icon, Footer, FooterTab
} from 'native-base';

import { connect } from 'react-redux';
import { openDrawer, pushNewRoute } from '../actions';
import theme from '../themes';

class Home extends Component {

    render() {
        return (
            <Container theme={theme}>
                <Header>
                    <Button transparent>
                        <Icon name='md-menu' onPress={this.props.openDrawer}/>
                    </Button>
                    <Title>React Native</Title>
                </Header>
                <Content>
                    <Text style={{ textAlign: 'center' }}>Hello world!</Text>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button onPress={() => this.props.pushRoute('second')}>
                            <Text>Next</Text>
                            <Icon name='md-arrow-forward' />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}


function mapActionsToProps(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        pushRoute: route => dispatch(pushNewRoute(route)),
    };
}

export default connect(null, mapActionsToProps)(Home);
