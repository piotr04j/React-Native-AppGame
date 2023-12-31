import { View, Text, StyleSheet, Dimensions } from "react-native"
import { Colors } from "../../constants/color"


const NumberContainer = ({children}) => {
    return (
        <View style={styles.constianer}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width

const styles= StyleSheet.create({
    constianer: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'open-sans-bold',
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 12 : 36,
    }
})