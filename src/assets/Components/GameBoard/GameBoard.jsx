import React from 'react'
import Sign from '../Signs/Sign'

export default function GameBoard({signsArray, BoardType,isMatch,setIsMatch,setSelectedSign}) {


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
                    key={sign.svg}
                    isMatch={isMatch}
                    setIsMatch={setIsMatch}
                    setSelectedSign={setSelectedSign}
                />
            ))}
        </div>
    )
};
