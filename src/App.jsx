import React from 'react'
import './App.css'
import AppBar from './assets/Components/AppBar/AppBar'
import GameBoard from './assets/Components/GameBoard/GameBoard'
import AdvancedBoard from './assets/images/bg-pentagon.svg'
import RegularBoard from './assets/images/bg-triangle.svg'
import { signs3 } from './assets/regularArray.js'
import { signs5 } from './assets/advancedArray.js'
import Rules from './assets/Components/Rules/Rules.jsx'
import DarkLayer from './assets/Components/Rules/DarkLayer.jsx'
import Match from './assets/Components/Match/Match.jsx'

function App() {
  const [score,setScore] = React.useState(0)
  const [advancedGame, setAdvancedGame] = React.useState(true)
  const [BoardType,setBoardType] = React.useState(RegularBoard)
  const [signsArray, setSignsArray] = React.useState(signs5)
  const [instructions, setInstructions] = React.useState(false)
  const [isMatch, setIsMatch] = React.useState(false)
  const [selectedSign, setSelectedSign] = React.useState('')
  const [winRing, setWinRing] = React.useState(false)
  const [winner,setWinner] = React.useState('')

  React.useEffect(() => {
    if (!advancedGame) {
      setSignsArray(signs3)
      
  } else {
      setSignsArray(signs5)
  }
  }, [advancedGame])
  
  return (
    <div className='App'>
      <AppBar
        advancedGame={advancedGame}
        setAdvancedGame={setAdvancedGame}
        setBoardType={setBoardType}
        score={score}
      />
      {!isMatch && <GameBoard
        advancedGame={advancedGame}
        signsArray={signsArray}
        BoardType={BoardType}
        isMatch={isMatch}
        setIsMatch={setIsMatch}
        setSelectedSign={setSelectedSign}
      />}
      {isMatch && <Match
        signsArray={signsArray}
        selectedSign={selectedSign}
        advancedGame={advancedGame}
        setScore={setScore}
        setIsMatch={setIsMatch}
        setWinRing={setWinRing}
        setWinner={setWinner}
      />}
      <button className='rules-button' onClick={() => setInstructions(!instructions)}>RULES</button>
      <>{instructions && <Rules advancedGame={advancedGame} setInstructions={setInstructions} instructions={ instructions} />}</>
      <>{instructions && <DarkLayer setInstructions={setInstructions} instructions={instructions} />}</>
      
      {winRing && (winner==='you') && <div className='ring-3' style={{
        transform: `translateX(${-48}%) translateY(${20.5}%)`
      }}
      >
        <div className='ring-2' style={{
        transform: `translateX(${26}%) translateY(${20}%)`
      }}>
          <div className='ring-1' style={{
        transform: `translateX(${31}%) translateY(${38}%)`
      }}>
          </div>
        </div>
      </div>}
      {winRing && (winner==='pc') && <div className='ring-3' style={{
        transform: `translateX(${42}%) translateY(${22}%)`
      }}
      >
        <div className='ring-2' style={{
        transform: `translateX(${10}%) translateY(${25}%)`
      }}>
          <div className='ring-1' style={{
        transform: `translateX(${28}%) translateY(${28}%)`
      }}>
          </div>
        </div>
      </div>}


    </div>
  )
}

export default App
