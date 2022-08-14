import React, {AiFillStar, AiOutlineStar} from 'react-icons/ai'

function Rating({rating = 0, onClick = 0, style}) {
  return (
    <>
<div>

</div>
    {
        [...Array(5)].map((_, i)=> (
            <span key={i} style={{style}}>
                 <span key={i} onClick={()=>onClick(i+1)}>  
                {rating > i ?(
                    <AiFillStar fontSize="20px" />
                ):(
                    <AiOutlineStar fontSize="20px" />
                )}
           </span>
            </span>
          
        ))
    }
    </>
  )
}

export default Rating