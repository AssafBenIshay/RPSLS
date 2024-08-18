import Logo from '../../images/logo.svg'
import bonusLogo from '../../images/logo-bonus.svg'
import AdvancedBoard from '../../images/bg-pentagon.svg'
import RegularBoard from '../../images/bg-triangle.svg'
import React from 'react'



export default function AppBar({ advancedGame, setAdvancedGame, setBoardType ,score}) {
    

    React.useEffect(() => {
        setBoardType(advancedGame ? AdvancedBoard : RegularBoard)
    },[advancedGame])

    return (
        <div className='app-bar'>
            <div className='logo' onDoubleClick={()=>setAdvancedGame(!advancedGame)}>
                <img src={advancedGame?bonusLogo:Logo} alt='Rock Paper Scissors'/>
            </div>
            <div className='score-container'>
                <div className='score-title'> StORE</div>
                <div className='score'>{score }</div>
            </div>
        </div>
    )
};
