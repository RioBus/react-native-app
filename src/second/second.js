import React, { Component } from 'react';
import { Container, Header, Content, Text, Title, Button, Icon } from 'native-base';
import theme from '../themes/base';

export default class Second extends Component {

    render() {
        return (
            <Container theme={theme}>
                <Header>
                    <Button transparent>
                        <Icon name='md-menu' onPress={this.props.openDrawer}/>
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