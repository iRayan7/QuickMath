import React, {Component} from 'react';
import { Text, View, StatusBar, TouchableOpacity, Image, Icon } from 'react-native';
import { Button } from 'react-native-elements'

class GameOver extends Component {

    correctScoreIfZero(){
        if(this.props.navigation.state.params.score == null){
            this.props.navigation.state.params.score = 0;
        }
    }

    navigateToMode = () => {
        if(this.props.navigation.state.params.type == "Mode1"){
            this.props.navigation.state.params.refresh()
            this.props.navigation.goBack(null)
        }
        else if(this.props.navigation.state.params.type == "Mode2"){
            this.props.navigation.state.params.refresh()
            this.props.navigation.goBack(null)
        }
    }

    render(){
        return (
            <View style={styles.containerStyles}>
                <Text style={ styles.gameOver }>Game Over</Text>
                <Text style={ styles.highScore }> { 'Your score: ' + this.props.navigation.state.params.score} </Text>
                <Text style={ styles.highScore }> { 'High Score: ' + this.props.navigation.state.params.highScore} </Text>

                <TouchableOpacity
                    onPress={() => this.navigateToMode()}
                    style={styles.ButtonStyles}
                >
                    <View>
                        <Text>Try Again</Text>
                    </View>
                </TouchableOpacity>
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
        fontFamily: 'Avenir-Black'
    },
    gameOver: {
        fontSize: 60,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Avenir-Black'
    }
}

export default GameOver;