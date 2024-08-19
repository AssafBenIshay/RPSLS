export default function Sign({ frameColor, shadowColor, svg, posX, posY, scale,sign,isMatch,setIsMatch ,setSelectedSign}) {
    
    

    return (
        <div className='sign-frame' style={{
            border: `solid 16px ${frameColor}`,
            boxShadow:`inset  0 6px rgba(0,0,0,0.2) , 0 8px ${shadowColor} `,
            scale: `${scale}`,
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
