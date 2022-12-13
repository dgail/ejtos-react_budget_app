import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'
const Budget =(props)=>{
    const {budget,currency} = useContext(AppContext);
    
    return(
    <div className='alert alert-secondary'>
        Budget:{currency}{ budget }
          
    </div>
    );
}

export default Budget