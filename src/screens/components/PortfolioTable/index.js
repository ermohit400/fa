import React, { Component } from 'react'
import { Container, Title, Text, Content, Form, Input,Textarea, Left, Right, View, Item, Button } from 'native-base'
import styles from "./styles";

class PortfolioTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bonds:'',
            large_cap:'',
            mid_cap:'',
            foreign:'',
            large_cap:'',
            small_cap:'',
            error:'',
        };
    }

    render() {
        const data = this.props.chartData; 
        return (
            <Container>
                <Content>
                    <Title style={styles.toptitle}>Please enter your current portfolio</Title>
                    <Form>
                        <View style={styles.leftContainer}>
                            <View style={styles.headerWrap}><Text>Current Amount</Text></View>
                            <View style={styles.headerWrap}><Text>Difference</Text></View>
                            <View style={styles.headerWrap}><Text>New Amount</Text></View>
                            <View style={styles.labelWrap}>
                                <Text>Bonds$</Text><Text>Large Cap$</Text><Text>Mid Cap$</Text><Text>Foreign$</Text><Text>Small Cap$</Text>
                            </View>
                            <View style={styles.textWrap}>
                                <Input onChangeText={(bonds) => this.setState({bonds})} value={this.state.bonds} placeholder="Bonds" style={styles.input} />
                                <Input onChangeText={(large_cap) => this.setState({large_cap})} value={this.state.large_cap} placeholder="Large Cap" style={styles.input} />
                                <Input onChangeText={(mid_cap) => this.setState({mid_cap})} value={this.state.mid_cap} placeholder="Mid Cap" style={styles.input} />
                                <Input onChangeText={(foreign) => this.setState({foreign})} value={this.state.foreign} placeholder="Foreign" style={styles.input} />
                                <Input onChangeText={(small_cap) => this.setState({small_cap})} value={this.state.small_cap} placeholder="Small Cap" style={styles.input} />
                            </View>
                            <View style={styles.displayWrap}>
                                <Input style={styles.displayInput} editable={false}/>
                                <Input style={styles.displayInput} editable={false} />
                                <Input style={styles.displayInput} editable={false} />
                                <Input style={styles.displayInput} editable={false} />
                                <Input style={styles.displayInput} editable={false} />
                            </View>
                            <View style={styles.displayWrap}>
                                <Input style={styles.displayInput} editable={false} />
                                <Input style={styles.displayInput} editable={false} />
                                <Input style={styles.displayInput} editable={false} />
                                <Input style={styles.displayInput} editable={false} />
                                <Input style={styles.displayInput} editable={false} />
                            </View>
                        </View>
                        <View style={styles.loginButtonSection}>
                            <Button><Text>Rebalance</Text></Button>
                        </View>
                        </Form>
                        <View style={styles.commentsWrap}>
                            <Text>Comments:</Text>
                            <Title>{this.state.error}</Title>
                        </View>                    
                </Content>
            </Container>
        )
    }
}

export default PortfolioTable