import React, { Component } from 'react'
import { Container,Content,Title } from 'native-base'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import styles from "./styles";

class PieChartWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
          chartData: this.props.chartData,
        };
    }

    render() {
        const data = this.props.chartData;
        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                if(data.amount > 0){
                    return (
                        <Text
                            key={index}
                            x={pieCentroid[ 0 ]}
                            y={pieCentroid[ 1 ]}
                            fill={'black'}
                            textAnchor={'middle'}
                            alignmentBaseline={'middle'}
                            fontSize={14}
                            stroke={'black'}
                            strokeWidth={0.5}
                        >
                            {data.label}
                        </Text>
                    )
                }
            })
        }

        return (
            <Content>
                <PieChart
                    style={styles.PieChart}
                    valueAccessor={({ item }) => item.amount}
                    data={data}
                    spacing={0}
                    outerRadius={'95%'}
                    innerRadius={'30%'}
                >
                    <Labels/>
                </PieChart>
            </Content>
        )
    }
}

export default PieChartWidget