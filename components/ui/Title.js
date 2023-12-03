import { Text, StyleSheet, Platform } from 'react-native'

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
        borderWidth: Platform.select({ios: 0, android: 2}),
        borderColor: '#fff',
        padding: 12,
        maxWidth: '80%',
        width: 300
    }
}) 