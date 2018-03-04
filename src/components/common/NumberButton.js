import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const NumberButton = (props) => {

     const { left, top, number, onPress} = props;
    return (

        <TouchableOpacity style={{
            left: left,
            top: top,
        }} onPress={onPress}>
            <View style={{

                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: '#fff',
                position: 'absolute'
            }}>
                <Text style={{ alignSelf: 'center', fontSize: 24}}>{number}</Text>
            </View>
        </TouchableOpacity>


    );
};

export default NumberButton;