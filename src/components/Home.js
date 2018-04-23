import React, { Component } from 'react';
import { Text, View, StatusBar, TouchableOpacity, Image, Icon } from 'react-native';
import { Button } from 'react-native-elements';

class Home extends Component {
    render() {
        return (

            <View style={styles.containerStyles}>
                <StatusBar hidden />
                <Text style={styles.label}>Quick Math!</Text>
                <View style={styles.playButtonsContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Mode2')}
                        style={styles.Mode2ButtonStyle}
                    >
                    <View>
                        <Text style={styles.buttonLabels}>Math Clock</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Mode1', {refresh: false})}
                        style={styles.Mode1ButtonStyle}
                    >
                        <View>
                            <Text style={styles.buttonLabels}>Yes / No</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.leaderboardButtonContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('QMLeaderboard')}
                        style={styles.leaderboardButtonStyle}
                    >
                        <View>
                            <Text style={styles.buttonLabels}>Leaderboard</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = {
    containerStyles: { //de7a59
        flex: 1,
        backgroundColor: '#f2ad97',
    },
    label: {
        marginTop: '45%',
        fontSize: 50,
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
    Mode2ButtonStyle: {
        alignItems: 'center',
        alignSelf: 'center',
        //marginTop: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 150,
        backgroundColor: '#e38f72',
        borderRadius: 0,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    Mode1ButtonStyle: {
        alignItems: 'center',
        alignSelf: 'center',
        //marginTop: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 150,
        backgroundColor: '#e2886a',
        borderRadius: 0,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    leaderboardButtonStyle: {
        alignItems: 'center',
        alignSelf: 'center',
        //marginTop: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 130,
        backgroundColor: '#de7a59',
        borderRadius: 0,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    leaderboardButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    playButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
}

export default Home;