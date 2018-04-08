
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-elements'

export default class Mode2 extends Component {
    render()
    {
        return(
            <View>
                <View style={styles.questionContainerStyles}>
                    <Text
                        style={styles.questionStyles}
                    >3  +  7 </Text>
                </View>

                <View style={styles.buttonsContainerStyles}>
                    <Button
                        text="LOADING BUTTON"
                        textStyle={{ fontWeight: "700" }}
                        buttonStyle={styles.buttonStyle}
                        containerStyle={{ marginTop: 20, marginBottom: 20 }}
                        outline
                    />
                    <Button
                        text="LOADING BUTTON"
                        textStyle={{ fontSize: 10, color: '#fff' }}
                        buttonStyle={styles.buttonStyle}
                        containerStyle={{ marginTop: 20, marginBottom: 20 }}
                    />
                    <Button
                        text="LOADING BUTTON"
                        textStyle={{ fontWeight: "700" }}
                        buttonStyle={styles.buttonStyle}
                        containerStyle={{ marginTop: 20, marginBottom: 20}}
                    />
                </View>
            </View>

        );
    }
}



const styles = {
    containerStyle: {

    },
    questionContainerStyles: {
    },
    questionStyles: {
        marginTop: 100,
        fontSize: 65,
        alignSelf: 'center',
    },
    buttonsContainerStyles: {
        marginTop: 120,
        backgroundColor: '#d6d6d6'
    },
    buttonStyle: {
        backgroundColor: "rgba(92, 99,216, 1)",
        width: '100%',
        height: 60,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,

    }
};