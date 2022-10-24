import React from 'react'
const Mali1 = (props) => {
  return (
    <div className='mali1'>
        <div className='mali-h1-p'>
        <h1>{props.emri}</h1>
        <p>{props.info}</p>
        <p>{props.infoo}</p>
        <button className='button-84' onClick={props.click}>{props.butoni}</button>
        </div>
        <img src={props.foto} alt="" />
    </div>
  )
}

export default Mali1