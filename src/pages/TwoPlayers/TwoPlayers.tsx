import React from 'react'
import { GameGrid } from '../../components/GameGrid/GameGrid'
import { Controlls } from '../../components/Controlls/Controlls'
import { PairsCounter } from '../../components/PairsCounter/PairsCounter'
import { useRecoilState, useRecoilValue } from 'recoil'
import { gameCompletedContext } from '../../context/gameContext'
import { createImageUrls } from '../../hooks/createImageUrls'
import { Endgame } from '../../components/Endgame/Endgame'
import { endgameCardContext } from '../../context/endgameContext'
import { LoadingGame } from '../../components/LoadingGame/LoadingGame'
import { Main, Data, SectionControlls, LoadCounter } from './styles.js'
import {
    cardsToValidateContext,
    pairsCounterContext,
} from '../../context/cardContext'

export const TwoPlayers = () => {
    const [gameCompleted, setGameCompleted] =
        useRecoilState(gameCompletedContext)
    const loading = createImageUrls()
    const [endgameCard, setEndgameCard] = useRecoilState(endgameCardContext)
    const [cardsToValidate, setCardsToValidate] = useRecoilState<any>(
        cardsToValidateContext
    )
    const [flippedCardsNumber, setFlippedCardsNumber] =
        useRecoilState(pairsCounterContext)
    const [validatedCards, setValidatedCards] = React.useState<any>(0)

    const [playerTurn, setPlayerTurn] = React.useState<string>('playerone')
    const [playerOnePairs, setPlayerOnePairs] = React.useState(0)
    const [playerTwoPairs, setPlayerTwoPairs] = React.useState(0)

    React.useEffect(() => {
        if (gameCompleted) {
            setEndgameCard(true)
        }
    }, [gameCompleted])

    React.useEffect(() => {
        setEndgameCard(false)
        setPlayerTurn('playerone')
    }, [])

    React.useEffect(() => {
        if (flippedCardsNumber > validatedCards) {
            if (playerTurn === 'playerone') {
                setPlayerOnePairs(playerOnePairs + 1)
            } else {
                setPlayerTwoPairs(playerTwoPairs + 1)
            }
            setValidatedCards(validatedCards + 1)
        }
    }, [flippedCardsNumber])

    React.useEffect(() => {
        setTimeout(() => {
            if (cardsToValidate.length === 2) {
                if (playerTurn === 'playerone') {
                    setPlayerTurn('playertwo')
                } else {
                    setPlayerTurn('playerone')
                }
            }
        }, 500)
    }, [cardsToValidate])

    const restartScore = () => {
        setPlayerOnePairs(0)
        setPlayerTwoPairs(0)
    }

    return (
        <React.Fragment>
            {loading ? (
                <LoadingGame />
            ) : (
                <Main>
                    <Data>
                        <div>
                            Turno:{' '}
                            {playerTurn === 'playerone'
                                ? 'Jugador 1'
                                : 'Jugador 2'}
                        </div>
                        <div>
                            <p>P1: {playerOnePairs}</p>
                            <p>P2: {playerTwoPairs}</p>
                        </div>
                    </Data>
                    <GameGrid />
                    <SectionControlls>
                        <Controlls
                            restartScore={restartScore}
                            controllSelector=""
                        />
                    </SectionControlls>
                    <LoadCounter>
                        <PairsCounter />
                    </LoadCounter>
                    <Endgame />
                </Main>
            )}
        </React.Fragment>
    )
}
