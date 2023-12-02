import { Text, View, StyleSheet } from 'react-native'
import { Colors } from '../../constants/color'

const GusesLogItem = ({rounds, guess}) => {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>#{rounds}</Text>
            <Text style={styles.text}>Opponent's guess: {guess}</Text>
        </View>
    )
}

export default GusesLogItem

const styles = StyleSheet.create({
    item: {
        borderColor: Colors.primary800,
        borderBottomWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.2,
        shadowRadius: 3
    },
    text: {
        fontFamily: 'open-sans'
    }
})