import { View, Text, StyleSheet } from "react-native"

const PrimaryButton = ({children}) => {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({

});
