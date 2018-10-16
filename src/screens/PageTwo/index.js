import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import PortfolioGraph from '../components/PortfolioGraph';
import PortfolioTable from '../components/PortfolioTable';

class PageTwo extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      riskLevel : this.props.riskLevel
    }
  }

  render(){
    return(
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Text>Risk Level : {this.props.riskLevel}</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>  
                <PortfolioGraph chartData={this.props.chartData}/>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
            <Body>
              <PortfolioTable/>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
export default PageTwo