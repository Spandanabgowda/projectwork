import React from 'react'
import './css/header.css'
const Header = () => {

   function click(name){
        console.log(name);
    }
     return (
        <div>
            <p className='para'>siet</p>
            <button onClick={() => click('spandana')}>click me</button>
        </div>
    )
}

export default Header