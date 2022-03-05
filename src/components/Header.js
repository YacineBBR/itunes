import React from 'react'
import IconButton from '@mui/material/IconButton';
import './Header.css'
const Header = () => {

    
    return (
        <div className='header'>
           <IconButton> 
            <h1 id='heading'> Itunes </h1>
            </IconButton>
            <form>
  <label>
    recherche
    <input type="text" name="recherch" />
  </label>
</form>  
            <IconButton>
                <button>chercher</button>
            </IconButton>
        </div>    
    )
}

export default Header