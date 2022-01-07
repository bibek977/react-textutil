// import React from 'react'
import './css/home.css'
import React, { useState } from 'react'


export default function Home(props) {
    const [textareaValue, settextareaValue] = useState('')

    const toLower=()=>{
        settextareaValue(textareaValue.toLowerCase())
    }

    const toUppper = ()=>{
        settextareaValue(textareaValue.toUpperCase())
    }

    const toClear = ()=>{
        settextareaValue('')
    }

    const result = (event)=>{
        settextareaValue(event.target.value)
    }
    return (
        <div className='home'>
            <h1>Enter Your Text :</h1>
            <textarea onChange={result} value={textareaValue}></textarea>
            <button onClick={toLower}>LowerCase</button>
            <button onClick={toUppper}>UpperCase</button>
            <button onClick={toClear}>Clear</button>
        </div>
    )
}
