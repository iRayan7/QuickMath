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

                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#E8E1C9',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <Text style={{  fontSize: 24, color: '#CA7865' }}>{number}</Text>
            </View>
        </TouchableOpacity>


    );
};

export default NumberButton;