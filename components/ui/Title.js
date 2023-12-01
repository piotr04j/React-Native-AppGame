import { Text, StyleSheet } from 'react-native'
import { Colors } from '../../constants/color'

const Title = ({children}) => {
    return (
        <Text style={styles.titleScreen}>{children}</Text>
    )
}

export default Title

const styles = StyleSheet.create({
    titleScreen: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        padding: 12
    }
})