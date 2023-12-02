import { View, Image, StyleSheet, Text } from 'react-native'
import Title from '../components/ui/Title'
import { Colors } from '../constants/color'
import PrimaryButton from '../components/ui/PrimaryButton'

const GameOverScrenn = ({rounds, numberChosenByUser, onStartNewGame}) => {
 return (
   <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
         <Image
            source={require('../assets/images/success.png')}
            style={styles.image}
         />
      </View>
      <Text style={styles.text}>
         Your phone need <Text style={styles.highlight}>{rounds}</Text> round to guess the number <Text style={styles.highlight}>{numberChosenByUser}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
 )
}

export default GameOverScrenn

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: 100,
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center'
   },
   imageContainer: {
      overflow: 'hidden',
      borderRadius: 150,
      height: 300,
      width: 300,
      borderWidth: 3,
      borderColor: Colors.primary800,
      margin: 36
   },
   image: {
      width: '100%',
      height: '100%'
   },
   text: {
      fontFamily: 'open-sans',
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 24
   },
   highlight: {
      fontFamily: 'open-sans-bold',
      color: Colors.primary500
   }
})