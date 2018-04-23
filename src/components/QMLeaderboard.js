import React, { Component } from 'react';
import {Text, View, StatusBar, TouchableOpacity, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Leaderboard from 'react-native-leaderboard';
import axios from 'axios';

class QMLeaderboard extends Component {
    state = {data: []} 

    componentDidMount(){
        this.getData()
    }

    getData = () => {
        axios.get('http://10.131.193.20:8000/api/get')
        .then( (response) => {
          console.log(response),
          this.setState({data: response.data});
        })
        .catch( (error) => {
          console.log(error);
        });
    }
    render(){
        return (
            <View>
            <Text style={{textAlign: 'center', fontSize: 25, marginBottom: 10, marginTop: 10}}>Leaderboard</Text>

            <Leaderboard 
                data = {this.state.data}
                sortBy='score'
                labelBy='name'
                containerStyle={{height: '100%'}}
            />
            </View>
        );
    }
}

export default QMLeaderboard;