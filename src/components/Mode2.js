import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import NumberButton from './common/NumberButton';

export default class Mode2 extends Component {

    state = {
        answerText: '',
        questionText: '',
        firstNumber: '',
        secondNumber: '',
        correctAnswer: '',
        score: 0,

    };

    addNumber(number) {
        let n = parseInt(this.state.answerText + '' + number);
        this.setState({answerText: n});
            
        // alternative solution with callback
        // })        this.setState({answerText: n}, function () {
        //     this.checkAnswer();
        // });



    }



    clearAnswer() {
        this.setState({answerText: ''});
    }

    generateQuestion() {


        // generate random numbers
        let randomNumber1 = Math.floor(Math.random() * 9) + 2;
        let randomNumber2 = Math.floor(Math.random() * 9) + 1;

        // choose random operator
        let operators = ['+','-','*'];
        let operator = operators[Math.floor(Math.random() * 3)];

        // make the question
        let questionAnswer, questionText, temp;
        if(operator == '+'){
            questionAnswer = randomNumber1 + randomNumber2;
            questionText = randomNumber1 + ' + ' + randomNumber2;
        } else if(operator == '*') {
            questionAnswer = randomNumber1 * randomNumber2;
            questionText = randomNumber1 + ' x ' + randomNumber2;
        } else {

            if(randomNumber1 < randomNumber2) {
                let temp = randomNumber2;
                randomNumber2 = randomNumber1;
                randomNumber1 = temp;
            }

            questionAnswer = randomNumber1 - randomNumber2;
            questionText = randomNumber1 + ' - ' + randomNumber2;
        }



        this.setState({
           questionText: questionText,
            firstNumber: randomNumber1,
            secondNumber: randomNumber2,
            correctAnswer: questionAnswer,
            answerText: '',
        });

    }

    checkAnswer () {
        let curreNtAnswer = this.state.answerText;
        let correCtAnswer = this.state.correctAnswer;
        let currentScore = this.state.score;

        console.log('current:'+curreNtAnswer);
        console.log('correct:'+correCtAnswer);

        if(correCtAnswer != '' && curreNtAnswer == correCtAnswer) {
            let currentScorePlusOne = currentScore + 1;
            this.setState({ score: currentScorePlusOne });
            this.generateQuestion();
        } else {
            let current = '' + curreNtAnswer;
            let correct = '' + correCtAnswer;
            if (current.length > 0){
                let i = current.length - 1;
                console.log("curreNtAnswer.length = " + current.length);
                console.log("correcttAnswer.length = " + correct.length);
                if (current[i] != correct[i]) {
                    this.setState({score: 0});
                    this.generateQuestion();
                }
            }
        }
    }

    componentWillMount() {
        this.generateQuestion();
    }

    componentDidUpdate() {
        this.checkAnswer();
    }
    render() {
        return (
            <View style={{flex: 3, flexDirection: 'column', backgroundColor: '#F19D6C'}}>
                <View style={styles.questionContainerStyles}>
                    <Text
                        style={styles.questionStyles}
                    >{this.state.questionText} </Text>
                </View>
                <Text style={{ alignSelf: 'center'}}>{this.state.score}</Text>
                <View style={styles.containerStyle}>
                    <View style={styles.boxStyles}>

                        <NumberButton top={'5%'} left={'30%'} number={'0'} onPress={this.addNumber.bind(this, 0)}/>
                        <NumberButton top={'20%'} left={'20%'} number={'9'} onPress={this.addNumber.bind(this, 9)}/>
                        <NumberButton top={'43%'} left={'15%'} number={'8'} onPress={this.addNumber.bind(this, 8)}/>
                        <NumberButton top={'65%'} left={'20%'} number={'7'} onPress={this.addNumber.bind(this, 7)}/>
                        <NumberButton top={'80%'} left={'30%'} number={'6'} onPress={this.addNumber.bind(this, 6)}/>

                        {/*right*/}
                        <NumberButton top={'5%'} left={'45%'} number={'1'} onPress={this.addNumber.bind(this, 1)}/>
                        <NumberButton top={'20%'} left={'55%'} number={'2'} onPress={this.addNumber.bind(this, 2)}/>
                        <NumberButton top={'43%'} left={'60%'} number={'3'} onPress={this.addNumber.bind(this, 3)}/>
                        <NumberButton top={'65%'} left={'55%'} number={'4'} onPress={this.addNumber.bind(this, 4)}/>
                        <NumberButton top={'80%'} left={'45%'} number={'5'} onPress={this.addNumber.bind(this, 5)}/>

                        <Text style={{left: '40%', top: '40%'}}>{this.state.answerText}</Text>
                    </View>
                </View>

                {/*<Button text={'clear'} onPress={this.clearAnswer.bind(this)}/>*/}

            </View>

        );
    }
}


const styles = {
    containerStyle: {

        flex: 2,
        alignSelf: 'center'


    },
    boxStyles: {
        width: 330,
        height: 200,
        backgroundColor: '#F19D6C',
        position: 'relative'

    },
    questionContainerStyles: {
        flex: 2,
    },
    questionStyles: {
        marginTop: 100,
        fontSize: 65,
        alignSelf: 'center',
    },
    buttonsContainerStyles: {
        marginTop: 120,
        // backgroundColor: '#F19D6C'
    },
    buttonStyle: {
        backgroundColor: "rgba(92, 99,216, 1)",
        width: '100%',
        height: 60,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,

    }
};
