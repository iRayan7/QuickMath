import React, { Component } from 'react';
import { Text, View, StatusBar, TouchableOpacity, Image, Icon } from 'react-native';
import { Button } from 'react-native-elements';

class Home extends Component {
    render() {
        return (

            <View style={styles.containerStyles}>
                <StatusBar hidden />
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Mode1')}
                    style={styles.ButtonStyles}
                >
                    <Button
                    />
                
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = {
    containerStyles: {
        flex: 3,
        backgroundColor: '#E0E3CC'
    },
    ButtonStyles: {
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        marginTop: '75%',
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 100,
    }
}

export default Home;