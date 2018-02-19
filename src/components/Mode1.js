import React, { Component } from 'react';
import { Text, View, StatusBar, TouchableOpacity, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class Mode1 extends Component {

    renderTureButton = () => {
        return (
            <View style={{flex: 1}} >
                <TouchableOpacity>
                    <Image
                        style={styles.ButtonStyles}
                        source={require('./images/true.png')}
                    />
                </TouchableOpacity>
                </View>
        );
    }
    renderFalseButton = () => {
        return (
            <View style={{flex: 1}} >
                <TouchableOpacity>
                    <Image
                        style={styles.ButtonStyles}
                        source={require('./images/false.png')}
                    />
                </TouchableOpacity>
                </View>
        );
    }
    render() {
        return (
            <View style={styles.containerStyles}>
                <View style={{ flex: 1 }} />
                <View style={{ flex: 1 }} />

                <View style={{ flex: 2, flexDirection: 'row' }}>
                    {this.renderTureButton()}
                    {this.renderFalseButton()}
                </View>

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
        marginTop: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        backgroundColor: '#F19D6C',
    }
}
export default Mode1;