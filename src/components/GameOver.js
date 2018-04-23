import React, {Component} from 'react';
import { TextInput, Text, View, StatusBar, TouchableOpacity, Image, Icon } from 'react-native';
import { Button } from 'react-native-elements'
import DeviceInfo from 'react-native-device-info';
import axios from 'axios';
class GameOver extends Component {

    state = {name: '', isInputEditable: true}

    correctScoreIfZero(){
        if(this.props.navigation.state.params.score == null){
            this.props.navigation.state.params.score = 0;
        }
    }

    componentDidMount() {
        if(this.props.navigation.state.params.highScore <= this.props.navigation.state.params.score && this.state.isInputEditable){
            this.state.isInputEditable = false
            this.setState({isInputEditable: false});
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

    saveName = () => {
        this.setState({isInputEditable: false});

        let name = this.state.name;
        let device_uuid = 'ssss';

        axios.post('http://10.131.193.20:8000/api/add', {
            name: name,
            device_uuid: device_uuid,
            score: this.props.navigation.state.params.highScore,
            type: this.props.navigation.state.params.type
          })
          .then(function (response) {
            console.log(response);
            alert('Success!')
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    //save name and disable textInput
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
                        <Text style={styles.buttonLabels}>Try Again</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.navigateToHome()}
                    style={styles.ButtonStyles}
                >
                    <View>
                        <Text style={styles.buttonLabels}>Main</Text>
                    </View>
                </TouchableOpacity>
                <TextInput
                 style={styles.buttonLabels}
                  placeholder={'Enter Nickname'}
                  editable={this.state.isInputEditable}
                onChangeText={(name) => this.setState({name})} />
                <TouchableOpacity
                    onPress={() =>
                        this.saveName()
                    }
                    style={styles.ButtonStyles}
                >
                    <View>
                        <Text style={styles.buttonLabels}>Submit</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    containerStyles: {
        flex: 1,
        backgroundColor: '#F19D6C'
    },
    ButtonStyles: {
        //alignItems: 'center',
        alignSelf: 'center',
        marginTop: 30,
        //alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 80,
        backgroundColor: '#de7a59',
        borderRadius: 0,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 3,
    },
    label: {
        //marginTop: 100,
        fontSize: 65,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Avenir-Black'
    },
    buttonLabels: {
        fontSize: 30,
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
        marginTop: 100,
        fontSize: 60,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Avenir-Black'
    }
}

export default GameOver;