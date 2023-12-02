import { Text, StyleSheet } from 'react-native'
import { Colors } from '../../constants/color';

const InstructionText = ({ children, customStyle }) => {
    return  <Text style={[styles.text, customStyle]}>{ children }</Text>
}

export default InstructionText

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24
    }
});
