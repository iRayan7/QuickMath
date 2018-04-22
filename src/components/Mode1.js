import React, { Component } from 'react';
import { Text, View, StatusBar, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import TimerCountdown from 'react-native-timer-countdown'

class Mode1 extends Component {
    state = { equation: '', solution: '', highScore: 0, score: 0, gameIsOver: false, timerCounter: 3000 }

    componentDidMount() {
        this.getHighScore();
        this.createEquation();
    }

    componentDidUpdate() {

    }

    getHighScore = async () => {
        try {
            const value = await AsyncStorage.getItem('highScore');
            if (value !== null){
              // We have data!!
              this.setState({highScore: value});
            }else{
                this.setState({highScore: 0});
            }
          } catch (error) {
            this.setState({highScore: 0});

        }
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
    renderTimer = () => {
         // if game is over, the user is already navigated to the next screen, so no need to render.
        if(this.state.gameIsOver) 
            return;
       return (
        <View style={styles.timerView} >
            <TimerCountdown
            initialSecondsRemaining={3000} // in ms
            interval={1000} // ticks every 1 second
            onTick={() =>  this.state.timerCounter = this.state.timerCounter - 1000 }
            onTimeElapsed={() => this.onTimeElapsed()}
            allowFontScaling={true}
            style={styles.timer}
            />
        </View>);
    }

    onTimeElapsed = () => {
        // alert("GameOver");
        this.goToGameOverScreen();
    }

    goToGameOverScreen = () => {
        this.setState({timerCounter: 0, gameIsOver: true});
        this.props.navigation.navigate('GameOver',{highScore: this.state.highScore, score: this.state.score,type:"Mode1"});
    }
    renderHighScore = () => {
        return
        (
            <View style={{ flex: 1 }} >
                <Text style={styles.highScore}> { 'score: ' + this.state.score} </Text>

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


    checkHighScore = async () => {
        let highScore = this.state.highScore;
        if(this.state.score > highScore ){
           this.setState({highScore: this.state.score});
           highScore = this.state.score;
               AsyncStorage.setItem('highScore', highScore+'');
        }
    }
    falsePressed = () => {
        if (eval(this.state.equation) == this.state.solution) {
            this.checkHighScore();
            this.goToGameOverScreen();
        } else {
            this.state.score++;
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
            this.state.score++;
            this.createEquation()
        } else {
            this.checkHighScore();
            this.goToGameOverScreen();
        }
    }
    render() {
        return (
            <View style={styles.containerStyles}>
                <Text style={ styles.highScore}> { 'high Score: ' + this.state.highScore} </Text>
                    {this.renderTimer(this.state.timerCounter)}
                <Text style={styles.score}> { 'score: ' + this.state.score} </Text>
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
        flex: 6,
        backgroundColor: '#F19D6C'
    },
    ButtonStyles: {
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '50%',
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
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Avenir-Black',
        marginTop: '10%'
    },
    score: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Avenir-Black'
    },
    timerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    timer: {
        fontSize: 40,
        textAlign: 'center',
        fontFamily: 'Avenir-Black',
        color: 'red',


    }

}
export default Mode1;