import React, { Component } from 'react';
import { Text, View, StatusBar, TouchableOpacity, Image, Icon } from 'react-native';
import { Button } from 'react-native-elements';

class Home extends Component {
    render() {
        return (

            <View style={styles.containerStyles}>
                <StatusBar hidden />
                <View style={styles.playButtonsContainer}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Mode1')}
                    style={styles.ButtonStyles}
                >
                <View>
                    <Text>➕➖➗✖️</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Mode2')}
                    style={styles.ButtonStyles}
                >
                <View>
                    <Text>✅❎</Text>
                </View>
                </TouchableOpacity>
                </View>
                <Button
                    title='Leaderboard'
                />
            </View>
        );
    }

}

const styles = {
    containerStyles: {
        flex: 3,
        backgroundColor: '#E0E3CC',
    },
    ButtonStyles: {
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        marginTop: '75%',
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 100,
    },

    playButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
}

export default Home;