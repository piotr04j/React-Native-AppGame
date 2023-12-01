import { View, TextInput, StyleSheet, Alert } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import { useState } from 'react'
import { Colors } from "../constants/color"

const StartGameScreen = ({onPickedNumberHandler}) => {
    const [enteredValue, setEnteredValue] = useState('')
    const onChangeHandler = (enteredText) => {
        setEnteredValue(enteredText)
    }

    const resetInputHandler = () => {
        setEnteredValue('')
    }

    const confimrInputHandler  = () => {
        const chosenNumber = parseInt(enteredValue)

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid value!',
                'Number must be a number between 1 and 99.',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            )
            return
        }

        onPickedNumberHandler(chosenNumber)
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={onChangeHandler}
                value={enteredValue}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confimrInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    container: {
        padding:16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 50,
        width: 50,
        fontSize: 42,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
});
