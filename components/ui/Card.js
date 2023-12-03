import { View, StyleSheet, Dimensions } from "react-native"
import { Colors } from "../../constants/color";

const Card = ({children}) => {
    return (
        <View style={styles.inputContainer}>

            {children}
        </View>    
    )
}

export default Card

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    inputContainer: {
        padding:16,
        marginTop: deviceWidth < 380 ? 18 : 36,
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
    }
});
