import { View, StyleSheet, Alert, FlatList } from 'react-native'
import Title from '../components/ui/Title'
import { useState, useEffect } from 'react'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import { Ionicons } from '@expo/vector-icons'
import GusesLogItem from '../components/game/GuessLogItem'

let boundary = {
    min: 1,
    max: 100
}

const GameScreen = ({numberChosenByUser, onGameOverHandler}) => {
    const generateRandomBetween = (min, max, excluded) => {
        const randomNumber = Math.floor(Math.random() * (max- min)) + min

        if (randomNumber === excluded) {
            return generateRandomBetween(boundary.min, boundary.max, excluded) 
        } else {
            return randomNumber
        }
    }

    let initGuess = generateRandomBetween(1,100, numberChosenByUser)
    const [currentGuess, setCurrentGuess] = useState(initGuess)
    const [rounds, setRounds] = useState([initGuess])


    useEffect(() => {
        if (currentGuess === numberChosenByUser) {
            onGameOverHandler(rounds.length)
        }
    }, [currentGuess, numberChosenByUser, onGameOverHandler])

    useEffect(() => {
        boundary.min = 1
        boundary.max = 100
    }, [])

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
        setRounds(prev => [newRandomNumber, ...prev])
    }

    const guessRoundListLenght = rounds.length

    return (
        <View style={styles.screen}>
            <Title>Oppontent's guess</Title>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card>
                <InstructionText customStyle={styles.instructionText}>Higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('grater')}>
                            <Ionicons name='md-add' size={24} color="#fff" />
                        </PrimaryButton>
                    </View>
                <View style={styles.buttonContainer}> 
                        <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                            <Ionicons name='md-remove' size={24} color="#fff" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList
                    data={rounds}
                    keyExtractor={(item) => {
                        return item
                    }}
                    renderItem={itemData => {
                        return <GusesLogItem rounds={guessRoundListLenght - itemData.index} guess={itemData.item} />
                    }
                }/>
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: 100
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    },
    instructionText: {
        marginBottom: 12
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
})