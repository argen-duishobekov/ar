import React, { useState } from 'react'

export default function Text() {
    const [Text, setText] = useState('Арген салам')
   

  return (
    <div>
        <h2>{Text}</h2>
      <input type="text" value={Text} onChange={event =>setText(event.target.value)} />
    </div>
  )
}
