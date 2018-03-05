import React, { Component } from 'react';
import { Text, View, StatusBar, TouchableOpacity, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class Mode1 extends Component {
    state = { equation: '', solution: '', highScore: 0 }

    componentDidMount() {
        this.createEquation();
    }
    createEquation = () => {
        // Return a random number between 1 and 10:
        const x = Math.floor((Math.random() * 10) + 1);
        const y = Math.floor((Math.random() * 10) + 1);

        // now we will render an operator, if 0 => + , 1 => - 
        const operator = Math.floor((Math.random() * 1) + 1);
        let equation = '';
        if (operator == 0) {
            equation = x + ' + ' + y;
        } else {
            equation = x + ' - ' + y;
        }
        // solution is the number shown to the user
        // if 0 => solution == trueSolution otherwise solution <> trueSoulution
        if (Math.round(Math.random()) == 0) {
            this.setState({
                equation,
                solution: eval(equation)
            });
        } else { //solution <> trueSoulution
            let solution = Math.floor((Math.random() * 10) + 1);
            this.setState({
                equation,
                solution
            });
        }

    }

    renderHighScore = () => {
        return
        (
            <View style={{ flex: 1 }} >
                <Text style={styles.highScore}>{this.state.highScore}</Text>
            </View>

        );
    }
    renderLabel = () => {
        return (
            <View style={{ flex: 1 }} >
                <Text style={styles.label}>{this.state.equation}</Text>
                <Text style={styles.label}>{'= ' + this.state.solution}</Text>
            </View>
        );
    }

    renderFalseButton = () => {
        return (
            <View style={{ flex: 1 }} >
                <TouchableOpacity
                    onPress={() => this.falsePressed()}
                >
                    <Image
                        style={styles.ButtonStyles}
                        source={require('./images/false.png')}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    falsePressed = () => {
        if (eval(this.state.equation) == this.state.solution) {
            alert('false');
            this.createEquation()
        } else {
            this.state.highScore++;
            this.createEquation()
        }
    }
    renderTureButton = () => {
        return (
            <View style={{ flex: 1 }} >
                <TouchableOpacity
                    onPress={() => this.truePressed()}
                >
                    <Image
                        style={styles.ButtonStyles}
                        source={require('./images/true.png')}
                    />
                </TouchableOpacity>
            </View>
        );
    }
    truePressed = () => {
        if (eval(this.state.equation) == this.state.solution) {
            this.state.highScore++;
            this.createEquation()
        } else {
            alert('false');
            this.createEquation()
        }
    }

    render() {
        return (
            <View style={styles.containerStyles}>
            <View style={{flex: 1}} />
                {this.renderLabel()}
                <View style={{ flex: 2, flexDirection: 'row' }}>
                    {this.renderTureButton()}
                    {this.renderFalseButton()}
                </View>

            </View>
        );
    }
}
const styles = {
    containerStyles: {
        flex: 5,
        backgroundColor: '#F19D6C'
    },
    ButtonStyles: {
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        backgroundColor: '#F19D6C',
    },
    label: {
        fontSize: 65,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Avenir-Black'
    },
    highScore: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Avenir-Black'
    }
}
export default Mode1;