import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    //const {menuItems} = props;
  return (

    <div className='navbar'>
        <div className='navbar-logo'>
            Kosovo Mountains
        </div>
        <nav className='navbar-list'>
            <ul>
                {props.menuItems.map((element) =>(
                    <li key={element.id}>
                        <NavLink to={element.path}>{element.name}</NavLink>
                    </li>
                )
                )}
            </ul>
        </nav>
    </div>
  )
}

export default Navbar