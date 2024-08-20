import React from 'react'

export default function Sign({ frameColor, shadowColor, svg, posX, posY, scale,sign,isMatch,setIsMatch ,setSelectedSign}) {
    const [bigView,setbigView] = React.useState(true)
    React.useEffect(() => {
        let screenWidth = 0
        let getScreenWidth = () => {
            return window.screen.width
        }
        screenWidth = getScreenWidth()

        if (screenWidth > 320 && screenWidth < 601) {
            setbigView(false)
        }
    },[])

    return (
        <div className='sign-frame' style={{
            border: `solid 16px ${frameColor}`,
            boxShadow:`inset  0 6px rgba(0,0,0,0.2) , 0 8px ${shadowColor} `,
            scale: `${bigView ? scale : scale*0.5}`,
            transform: `translateX(${posX}%) translateY(${posY}%)`
        }} onClick={() => {
            setIsMatch(!isMatch)
            setSelectedSign(sign)
        }}>
            <div className='svg'>
                <img src={svg} alt={svg} />
            </div>
            
        </div>
    )
};
