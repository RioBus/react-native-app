import React, { Component } from 'react';
import { Container, Header, Content, Text, Title, Button, Icon, List, ListItem, Spinner } from 'native-base';
import theme from '../themes/base';
import LineItem from '../lineItem';

export default class Search extends Component {

    componentWillMount() {
        this.props.loadLines();
    }

    renderLines() {
        if (this.props.lines.length === 0) return (<Spinner color='blue' />);

        const items = [];
        items.push(<ListItem itemDivider key={-1}><Text>Linhas disponíveis</Text></ListItem>);
        const tmp = this.props.lines.map(
            (line, i) => <ListItem key={i}><LineItem line={line} /></ListItem>
        );
        return items.concat(tmp);
    }

    render() {
        return (
            <Container theme={theme}>
                <Header>
                    <Button transparent>
                        <Icon name='md-menu' onPress={this.props.openDrawer}/>
                    </Button>
                    <Title>Rio Bus</Title>
                    <Button transparent>
                        <Icon name='md-search' onPress={this.props.openDrawer}/>
                    </Button>
                </Header>
            	<Content>
                    <List>
                        {this.renderLines()}
                    </List>
            	</Content>
            </Container>
        );
    }
}