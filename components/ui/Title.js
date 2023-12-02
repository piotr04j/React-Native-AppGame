import { Text, StyleSheet } from 'react-native'

const Title = ({children}) => {
    return (
        <Text style={styles.titleScreen}>{children}</Text>
    )
}

export default Title

const styles = StyleSheet.create({
    titleScreen: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        padding: 12
    }
})