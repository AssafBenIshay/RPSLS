import React from 'react'
import Sign from '../Signs/Sign'
import { signs5 } from '../../advancedArray'
import { signs3 } from '../../regularArray'




export default function Match({ selectedSign,advancedGame,score,setScore,setIsMatch,setWinRing,setWinner}) {
    const [onBoardSign, setOnBoardSign] = React.useState('')
    const [pcSign, setPcSign] = React.useState('')
    const [pcTurn, setPcTurn] = React.useState(false)
    const [turnEnded, setTurnEnded] = React.useState(false)
    const [isIWinner,setIsIWinner] = React.useState('')

    React.useEffect(() => {
        setWinRing(false)

    }, [onBoardSign])
    
    React.useEffect(() => {
        for (let i = 0; i < 5; i++){
            if (signs5[i].sign === selectedSign) {
                setOnBoardSign(signs5[i])
            }
        }
        setPcSign(advancedGame
            ? signs5[Math.floor(Math.random() * 5)]
        :signs3[Math.floor(Math.random() * 3)])
    }, [selectedSign])
    
    React.useEffect(() => {
        setTimeout(() => {
            setPcTurn(!pcTurn)

        }, 1000);
    }, [selectedSign])

    React.useEffect(() => {
        setTimeout(() => {
            setTurnEnded(!turnEnded)
        }, 2000);
    }, [pcTurn])
    
    // React.useEffect(() => {
    //     const first = () => checkWhoWon()
    //     try {
    //             first()
    //     } catch (error) {
    //         console.log('error', error)
    //     }

    // }, [turnEnded])

    
    React.useEffect(() => {
        const first = () => checkWhoWon()

        function checkWhoWon() {

            if (pcSign.svg) {
                if (pcSign.sign === selectedSign) {
                    setIsIWinner('ITS A TIE!')
                    setWinRing(false)
                    return
                } else if ((pcSign.sign === (3) && selectedSign === (2))) {
                    setIsIWinner('YOU LOSE')
                    setScore(last => last - 1)
                    setWinRing(true)
                    setWinner('pc')
                    return
                } else if (pcSign.sign === (3) && selectedSign === (4)) {
                    setIsIWinner('YOU LOSE')
                    setScore(last => last - 1)
                    setWinRing(true)
                    setWinner('pc')
                    return
                } else if (pcSign.sign === (2) && selectedSign === (1)) {
                    setIsIWinner('YOU LOSE')
                    setScore(last => last - 1)
                    setWinRing(true)
                    setWinner('pc')
                    return
                } else if (pcSign.sign === (2) && selectedSign === (5)) {
                    setIsIWinner('YOU LOSE')
                    setScore(last => last - 1)
                    setWinRing(true)
                    setWinner('pc')
                    return
                } else if (pcSign.sign === (1) && selectedSign === (4)) {
                    setIsIWinner('YOU LOSE')
                    setScore(last => last - 1)
                    setWinRing(true)
                    setWinner('pc')
                    return
                } else if (pcSign.sign === (1) && selectedSign === (3)) {
                    setIsIWinner('YOU LOSE')
                    setScore(last => last - 1)
                    setWinRing(true)
                    setWinner('pc')
                    return
                } else if (pcSign.sign === (4) && selectedSign === (5)) {
                    setIsIWinner('YOU LOSE')
                    setScore(last => last - 1)
                    setWinRing(true)
                    setWinner('pc')
                    return
                } else if (pcSign.sign === (4) && selectedSign === (2)) {
                    setIsIWinner('YOU LOSE')
                    setScore(last => last - 1)
                    setWinRing(true)
                    setWinner('pc')
                    return
                } else if (pcSign.sign === (5) && selectedSign === (3)) {
                    setIsIWinner('YOU LOSE')
                    setScore(last => last - 1)
                    setWinRing(true)
                    setWinner('pc')
                    return
                } else if (pcSign.sign === (5) && selectedSign === (1)) {
                    setIsIWinner('YOU LOSE')
                    setScore(last => last - 1)
                    setWinRing(true)
                    setWinner('pc')
                    return
                } else {
                    setIsIWinner('YOU WIN')
                    setScore(last => last + 1)
                    setWinRing(true)
                    setWinner('you')
                    return
                }
        
        
            }
        }


        first()

        
},[turnEnded])


    return (
        <div className='match'>
            <div className='match-titles'>
                <p>YOUR HAND</p>
                <p>THE HOUSE PICKED</p> 
            </div>
            <div className='match-area'>
                <Sign 
                    svg={onBoardSign.svg}
                    frameColor={onBoardSign.frameColor}
                    shadowColor={onBoardSign.shadowColor}
                    posX={-110}
                    posY={50}
                    scale={2}
                    key={onBoardSign.svg}
                />

                {turnEnded && <div className='result-div'>
                    <h1 className='result-h1'>{isIWinner}</h1>
                    <button
                        className='result-button'
                        onClick={() => {
                            setIsMatch(false)
                            setIsIWinner('')
                            setWinRing(false)
                        }}
                        style={{
                            color: `${isIWinner === 'YOU LOSE' ? 'red' : ''}`
                        }}
                    >PLAY AGAIN</button>
                </div>}

                {!pcTurn && <div className='pc-placeholder'></div>}
                {pcTurn &&
                            <Sign 
                                svg={pcSign.svg}
                                frameColor={pcSign.frameColor}
                                shadowColor={pcSign.shadowColor}
                                posX={110}
                                posY={50}
                                scale={2}
                                key={crypto.randomUUID()}
                            />
                }
            </div>
        </div>
    )
    
};
