export default function DarkLayer({instructions,setInstructions}) {
    
    return (

        <div className='dark-layer' onClick={()=>setInstructions(!instructions)}>
            
        </div>
    )
};
