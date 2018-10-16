import React, { Component } from 'react'
import { View } from 'native-base'
import { Table, Row, Rows } from 'react-native-table-component';
import styles from "./styles";

class PortfolioGraph extends Component {
    constructor(props) {
        super(props);
        var tbHead = [];
        var tbData = [];
        for(let i = 0; i < this.props.chartData.length; i++){
          tbHead.push(this.props.chartData[i]['label']+' ');
          tbData.push(this.props.chartData[i]['amount']+'%');
        }

        this.state = {
            chartData: this.props.chartData,
            tableHead: [ tbHead ],
            tableData: [ tbData,]
        };
    }

    render() {
        const data = this.props.chartData; 
        return (
            <View style={styles.container}>
                <Table borderStyle={{borderWidth: 1}}>
                  <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
                  <Rows data={this.state.tableData} textStyle={styles.text}/>
                </Table>
                <Table borderStyle={{borderWidth: 1}}>
                </Table>
            </View>
        )
    }
}

export default PortfolioGraph