import React, { Component } from 'react';
import { Container, View, Card, CardItem, Item, Input, Header, Body, Content, Icon, Picker, Title, Button, Text, Right, Left} from 'native-base';
import { Actions } from 'react-native-router-flux';
import PieChartWidget from '../components/PieChartWidget';
import styles from "./styles";
var customData = require('../../config');

class PageOne extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      selected: "1",
      chartData : customData['ranks'][1]
    }
  }

  onValueChange(value: string) {
    this.setState({
      selected: value,
      chartData : customData['ranks'][value]
    });
  }

  render(){
    var options = [];
    for(let i = 1; i <= 10; i++){
      options.push(
        <Picker.Item key={i} label={'Level '+i} value={i} />
      )
    }

    const goToPageTwo = () => Actions.PageTwo({riskLevel: this.state.selected, chartData: this.state.chartData}); 

    return(
      <Container style={styles.container}>
        <Content padder>
          <Card>
            <CardItem>
                  <Left><Text>Select a risk level </Text></Left>
                  <Right>
                    <Picker
                      mode="dropdown"
                      iosHeader="Select Risk Level"
                      iosIcon={<Icon name="ios-arrow-down-outline" />}
                      style={{ width: undefined }}
                      selectedValue={this.state.selected}
                      onValueChange={this.onValueChange.bind(this)}
                    >
                     {options}
                    </Picker>
                  </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
                <PieChartWidget chartData={this.state.chartData}/>
            </CardItem>
          </Card>
          <Card style={styles.loginButtonSection}>
            <CardItem>
              <Button onPress={goToPageTwo}>
                <Text>Continue</Text>
              </Button>
            </CardItem>  
          </Card>
         </Content>
      </Container>
    );
  }
}

export default PageOne;