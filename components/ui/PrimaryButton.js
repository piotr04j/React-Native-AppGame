import { View, Text, StyleSheet, Pressable } from "react-native"
import { Colors } from "../../constants/color";

const PrimaryButton = ({children, onPress}) => {


    return (
        <View style={styles.buttonContainer}>
            <Pressable
                onPress={onPress}
                android_ripple={{color: Colors.primary800}}
                style={({pressed}) => pressed ? [styles.pressed, styles.button] : styles.button}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 12,
        margin: 4,
        overflow: 'hidden'
    },
    button: {
        backgroundColor: Colors.primary500,
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',

    },
    pressed: {
        opacity: 0.75
    }
});
