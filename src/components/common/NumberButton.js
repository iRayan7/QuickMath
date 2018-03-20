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

                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#d6d6d6',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{  fontSize: 24}}>{number}</Text>
            </View>
        </TouchableOpacity>


    );
};

export default NumberButton;