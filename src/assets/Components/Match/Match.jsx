import React from 'react'
import Sign from '../Signs/Sign'
import { signs5 } from '../../advancedArray'
import { signs3 } from '../../regularArray'




export default function Match({ selectedSign,advancedGame,setScore,setIsMatch,setWinRing,setWinner}) {
    const [onBoardSign, setOnBoardSign] = React.useState('')
    const [pcSign, setPcSign] = React.useState('')
    const [pcTurn, setPcTurn] = React.useState(false)
    const [turnEnded, setTurnEnded] = React.useState(false)
    const [isIWinner,setIsIWinner] = React.useState('')

    React.useEffect(() => {
        for (let i = 0; i < 5; i++){
            if (signs5[i].svg === selectedSign) {
                setOnBoardSign(signs5[i])
            }
        }
    
    }, [selectedSign])
    
    React.useEffect(() => {
        setTimeout(() => {
            setPcSign(advancedGame
                ? signs5[Math.floor(Math.random() * 5)]
            :signs3[Math.floor(Math.random() * 3)])
            setPcTurn(!pcTurn)

        }, 1000);
    }, [selectedSign])

    React.useEffect(() => {
        setTimeout(() => {
            setTurnEnded(!turnEnded)

        }, 2000);

    }, [selectedSign])
    
    React.useEffect(() => {
        setTimeout(() => {
            setTurnEnded(!turnEnded)
        }, 300000);

        try {
            if (pcSign.svg) {
                 plop()
            }
           
        } catch (error) {
            console.log('error', error)
        }
    },[turnEnded])
    
    function plop() {
        if (pcSign.svg === selectedSign) {
            setIsIWinner('ITS A TIE!')
        } else if ((pcSign.svg.includes('scissor') && selectedSign.includes('paper')))         {
            setIsIWinner('YOU LOSE')
            setScore(last => last - 1)
            setWinRing(true)
            setWinner('pc')
        }
        else if (pcSign.svg.includes('scissor') && selectedSign.includes('lizard')) {
            setIsIWinner('YOU LOSE')
            setScore(last => last - 1)
            setWinRing(true)
            setWinner('pc')
        }
             else if(pcSign.svg.includes('paper') && selectedSign.includes('rock')){
                setIsIWinner('YOU LOSE')
                setScore(last => last - 1)
                setWinRing(true)
                setWinner('pc')
            }
             else if(pcSign.svg.includes('paper') && selectedSign.includes('spock')){
                setIsIWinner('YOU LOSE')
                setScore(last => last - 1)
                setWinRing(true)
                setWinner('pc')
            }
             else if(pcSign.svg.includes('rock') && selectedSign.includes('lizard')){
                setIsIWinner('YOU LOSE')
                setScore(last => last - 1)
                setWinRing(true)
                setWinner('pc')
            }
             else if(pcSign.svg.includes('rock') && selectedSign.includes('scissor')){
                setIsIWinner('YOU LOSE')
                setScore(last => last - 1)
                setWinRing(true)
                setWinner('pc')
            }
             else if(pcSign.svg.includes('lizard') && selectedSign.includes('spock')){
                setIsIWinner('YOU LOSE')
                setScore(last => last - 1)
                setWinRing(true)
                setWinner('pc')
            }
             else if(pcSign.svg.includes('lizard') && selectedSign.includes('paper')){
                setIsIWinner('YOU LOSE')
                setScore(last => last - 1)
                setWinRing(true)
                setWinner('pc')
            }
             else if(pcSign.svg.includes('spock') && selectedSign.includes('scissor')){
                setIsIWinner('YOU LOSE')
                setScore(last => last - 1)
                setWinRing(true)
                setWinner('pc')
            }
             else if(pcSign.svg.includes('spock') && selectedSign.includes('rock')){
                setIsIWinner('YOU LOSE')
                setScore(last => last - 1)
                setWinRing(true)
                setWinner('pc')
            }
        else {
            setIsIWinner('YOU WIN')
            setScore(last => last + 1)
            setWinRing(true)
            setWinner('you')
        }
        
    }    

    return (
        <div className='match'>
            <div className='match-titles'>
                <p>YOU PICKED</p>
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
