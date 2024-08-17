import RegularRules from '../../images/image-rules.svg'
import AdvancedRules from '../../images/image-rules-bonus.svg'
import Exit from '../../images/icon-close.svg'
import React from 'react'

export default function Rules({ advancedGame ,setInstructions,instructions}) {
    const[rules,setRules] = React.useState(AdvancedRules)

    React.useEffect(() => {
        console.log('advancedGame', advancedGame)
        if (advancedGame) {
            setRules(AdvancedRules)
        } else {
            setRules(RegularRules)
        }
    }, [advancedGame])

    


    return (
        <div className='rules'>
            <div className='ins-top-cont'>
                <h2>RULES</h2>
                <button className='exit-button'><img src={Exit } onClick={()=>setInstructions(!instructions)}/></button>
            </div>
            <img src={rules} alt={rules} key={crypto.randomUUID()}/>
        </div>
    )
}