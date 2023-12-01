import { Text, View, StyleSheet, Alert } from 'react-native'
import Title from '../components/ui/Title'
import { useState } from 'react'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'

let boundary = {
    min: 1,
    max: 100
}

const GameScreen = ({numberChosenByUser}) => {

    const generateRandomBetween = (min, max, excluded) => {
        const randomNumber = Math.floor(Math.random() * (max- min)) + min

        if (randomNumber === excluded) {
            return generateRandomBetween(boundary.min, boundary.max, excluded) 
        } else {
            return randomNumber
        }
    }

    const nextGuessHandler = (direction) => {

        if(direction === 'lower' && currentGuess < numberChosenByUser || direction === 'grater' && currentGuess > numberChosenByUser) {
            Alert.alert('Don\'t lie!', 'You know that is wrong...', [{text: 'Sorry!', style: 'cancel'}])
            return 
        }
        
        if (direction === 'lower') {
            boundary.max = currentGuess
        } else {
            boundary.min = currentGuess + 1
        }
        
        const newRandomNumber = generateRandomBetween(boundary.min, boundary.max, currentGuess)
        setCurrentGuess(newRandomNumber)
    }

    const initGuess = generateRandomBetween(1,100, numberChosenByUser)
    const [currentGuess, setCurrentGuess] = useState(initGuess)


    return (
        <View style={styles.screen}>
            <Title>Oppontent's guess</Title>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButton onPress={() => nextGuessHandler('grater')}>
                        +
                    </PrimaryButton>
                    <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                        -
                    </PrimaryButton>
                </View>
            </View>
            <View>
                {/* Log rounds */}
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
})