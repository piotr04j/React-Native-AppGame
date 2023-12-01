import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from "./screens/GaneScreen";
import { Colors } from "./constants/color";

export default function App() {
  const [userNumber, setUserNumber] = useState(null)

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
  }

  const screen = userNumber ? <GameScreen numberChosenByUser={userNumber} /> : <StartGameScreen onPickedNumberHandler={pickedNumberHandler} />


  return (
    <LinearGradient
      style={styles.rootScrenn}
      colors={[Colors.primary700, Colors.accent500]}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScrenn}
        imageStyle={styles.image}
      >
        <SafeAreaView style={styles.rootScrenn}>
          {screen}
        </SafeAreaView>
      </ImageBackground>  
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScrenn: {
    flex: 1
  },
  image: {
    opacity: 0.15
  }
});
