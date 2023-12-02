import { View, TextInput, StyleSheet, Alert, Text } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import { useState } from 'react'
import { Colors } from "../constants/color"
import Title from "../components/ui/Title"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"

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
            <Title>Guess my number!</Title>
            <Card>
                <InstructionText customStyle={{}}>Enter a number</InstructionText>
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
            </Card>
        </View>
 
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
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
