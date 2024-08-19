import React from 'react'
import Sign from '../Signs/Sign'

export default function GameBoard({signsArray, BoardType,isMatch,setIsMatch,setSelectedSign,setWinRing}) {
    

    return (
        <div className='game-board' key={crypto.randomUUID()}>
            <img src={BoardType} alt={BoardType} />
            {signsArray.map(sign => (
                <Sign
                    svg={sign.svg}
                    frameColor={sign.frameColor}
                    shadowColor={sign.shadowColor}
                    posX={sign.posX}
                    posY={sign.posY}
                    scale={sign.scale}
                    sign={sign.sign}
                    key={sign.svg}
                    isMatch={isMatch}
                    setIsMatch={setIsMatch}
                    setSelectedSign={setSelectedSign}
                    setWinRing={setWinRing}
                />
            ))}
        </div>
    )
};
