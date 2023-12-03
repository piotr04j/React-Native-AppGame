import { View, Image, StyleSheet, Text, useWindowDimensions, ScrollView } from 'react-native'
import Title from '../components/ui/Title'
import { Colors } from '../constants/color'
import PrimaryButton from '../components/ui/PrimaryButton'

const GameOverScrenn = ({rounds, numberChosenByUser, onStartNewGame}) => {
 const {width, height} = useWindowDimensions()
 const marginTop = height < 400 ? 30 : 100  
 let imageSize = 300

 if (width < 300) {
   imageSize = 150
 }

 if (height < 400) {
   imageSize = 80
 }

 const imageStyle = {
   width: imageSize,
   height: imageSize,
   borderRadius: imageSize / 2
 }

 return (
   <ScrollView style={styles.screen}>
      <View style={[styles.container, {marginTop}]}>
         <Title>GAME OVER!</Title>
         <View  style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
 )
}

export default GameOverScrenn

const styles = StyleSheet.create({
   screen: {
      flex: 1
   },
   container: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center'
   },
   imageContainer: {
      overflow: 'hidden',
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