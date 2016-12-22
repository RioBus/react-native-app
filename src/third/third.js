import React, { Component } from 'react';
import { Container, Header, Content, Text, Title, Button, Icon } from 'native-base';
import theme from '../themes/base';

export default class Third extends Component {

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