import { View, TextInput, StyleSheet } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

const StartGameScreen = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    container: {
        padding:16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: "#77063c",
        borderRadius: 8,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    input: {
        height: 50,
        width: 50,
        fontSize: 42,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
