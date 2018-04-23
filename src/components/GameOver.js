import React, {Component} from 'react';
import { Text, View, StatusBar, TouchableOpacity, Image, Icon } from 'react-native';
import { Button } from 'react-native-elements'
import DeviceInfo from 'react-native-device-info';
import axios from 'axios';
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

    navigateToHome = () => {
        this.props.navigation.pop(2)
    }

    tempFunction(){
        let name = 'ddd';
        let device_uuid = DeviceInfo.getUniqueID();
        let score = this.props.navigation.state.params.highScore;
        
        axios.post('http://10.131.193.20:8000/api/add', {
            name: name,
            device_uuid: device_uuid,
            'score': score
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
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
                <TouchableOpacity
                    onPress={() => this.navigateToHome()}
                    style={styles.ButtonStyles}
                >
                    <View>
                        <Text>Main</Text>
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
        //marginTop: '50%',
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