import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-elements'

class GameOver extends Component {

    render(){
        return (
            <View style={styles.containerStyles}>
                <Text>Game Over</Text>
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
        fontSize: 100,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Avenir-Black'
    }
}

export default GameOver;