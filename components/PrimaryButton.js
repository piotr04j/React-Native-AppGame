import { View, Text, StyleSheet, Pressable } from "react-native"

const PrimaryButton = ({children}) => {


    return (
        <View style={styles.buttonContainer}>
            <Pressable
                onPress={() => {}}
                android_ripple={{color: '#640233'}}
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
        borderRadius: 25,
        margin: 4,
        overflow: 'hidden'
    },
    button: {
        backgroundColor: '#72063c',
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
