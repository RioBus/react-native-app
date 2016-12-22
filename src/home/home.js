import React, { Component } from 'react';
import { Container, Header, Content, Text, Title, Button, Icon } from 'native-base';
import theme from '../themes/base';

export default class Home extends Component {

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
            		<Text>Hello world!</Text>
                    <Button primary iconRight onPress={() => this.props.pushRoute('second')}>
                        <Text>Next</Text>
                        <Icon name='ios-arrow-forward' />
                    </Button>
            	</Content>
            </Container>
        );
    }
}