import React, { useState } from 'react'

function Addtodo({onAdd}) {
    const [title,settitle] = useState('')
  return (
    <div>
     <input type="text" name="" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
     <button onClick={()=>{onAdd(title)}}>Add</button> 
    </div>
  )
}

export default Addtodo
