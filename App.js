import { useState, useCallback } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from "./screens/GaneScreen";
import { Colors } from "./constants/color";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [gameOver, setGameOver] = useState(true)
  const [roudns, setRounds] = useState(0)

  SplashScreen.preventAutoHideAsync()

  const [fontIsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontIsLoaded]);

  if (!fontIsLoaded) {
    return null;
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
    setGameOver(false)
  }
  
  const gameOverHandler = (rounds) => {
    setRounds(rounds)
    setGameOver(true)
  }

  const startNewGameHandler = () => {
    setRounds(0),
    setUserNumber(null)
    setGameOver(true)
  }

  let screen = userNumber ? <GameScreen numberChosenByUser={userNumber} onGameOverHandler={gameOverHandler}/> : <StartGameScreen onPickedNumberHandler={pickedNumberHandler} />

  if (userNumber && gameOver) {
    screen = <GameOverScreen numberChosenByUser={userNumber} rounds={roudns} onStartNewGame={startNewGameHandler}/>
  } 

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        style={styles.rootScreen}
        colors={[Colors.primary700, Colors.accent500]}
        onLayout={onLayoutRootView}
      >
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.image}
        >
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
        </ImageBackground>  
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  image: {
    opacity: 0.15
  }
});
