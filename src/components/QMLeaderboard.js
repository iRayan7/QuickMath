import React, { Component } from 'react';
import {Text, View, StatusBar, TouchableOpacity, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Leaderboard from 'react-native-leaderboard';

class QMLeaderboard extends Component {

    render(){
        return (
            <Leaderboard 
                data = {
                    [ {userName: 'Joe', highScore: 52},
                    {userName: 'Jenny', highScore: 120}]
                }
                sortBy='highScore'
                labelBy='userName'
            />
        );
    }
}

export default QMLeaderboard;