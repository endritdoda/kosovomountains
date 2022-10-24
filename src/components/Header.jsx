import React from 'react'
import gje from '../photos/gjeravicapapng.png'
import {Link} from 'react-router-dom'
import ma from '../photos/majaezez.png'

const Header = () => {
  return (
    <div className='header'>
        <h1>The Highest Mountains in KOSOVO</h1>
        <div className='malet-header'>
        <div className='div-photo-header'>
            <Link to ='/mali1'>
            <img className='mali' src={gje} alt="#" />
            </Link>
            <h3>GJERAVICA</h3>
        </div>
        <div className='div-photo-header'>
            <Link to='/mali2'>
            <img  className='mali' src={ma} alt="#" />
            </Link>
            <h3>MAJA E ZEZË</h3>
        </div>
        </div>
    </div>
  )
}

export default Header