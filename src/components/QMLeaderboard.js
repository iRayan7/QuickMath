import React, { Component } from 'react';
import {Text, View, StatusBar, TouchableOpacity, Image } from 'react-native';
import { Button, Icon, ButtonGroup } from 'react-native-elements';
import Leaderboard from 'react-native-leaderboard';
import axios from 'axios';

class QMLeaderboard extends Component {
    state = {mode1: [], mode2: [], index: 0,} 

    componentDidMount(){
        this.getData()
    }

    getData = () => {
        axios.get('http://10.131.193.20:8000/api/get')
        .then( (response) => {
          console.log(response),
          this.setState({mode1: response.data[0], mode2: response.data[1]});
        })
        .catch( (error) => {
          console.log(error);
        });
    }

    updateIndex = (index) => {
        this.setState({ index });
      }

      displayLeaderBoard1 = () => {
          return (
            <Leaderboard 
                data = {this.state.mode1}
                sortBy='score1'
                labelBy='name'
                containerStyle={{height: '100%'}}
            />
          );
      }
      displayLeaderBoard2 = () => {
        return (
          <Leaderboard 
              data = {this.state.mode2}
              sortBy='score2'
              labelBy='name'
              containerStyle={{height: '100%'}}
          />
        );
    }
    render(){
        return (
            <View>
         <ButtonGroup
            selectedBackgroundColor="pink"
            onPress={this.updateIndex}
            selectedIndex={this.state.index}
            buttons={['Mode1', 'Mode2']}
            containerStyle={{height: 30 }}
          />

           {this.state.index === 0 ? this.displayLeaderBoard1() : this.displayLeaderBoard2()}

            </View>
        );
    }
}

export default QMLeaderboard;