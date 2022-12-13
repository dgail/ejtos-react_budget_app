import React,{useReducer} from 'react'
export const countReducer =(state,action)=>{
    
    if(action.type==='INCREMENT')
    {
        state.count = state.count+1;
        
    }
    else if (action.type==='DECREMENT')
    {
        state.count = state.count-1;
       
    }
    else
    state.count =0;
    
    return state;
}
const initialState ={
    count:0
} 

function CounterContext(props)
{
    const [state,dispatch] = useReducer(countReducer,initialState);
   
    return (<div>
        
       The counter is: {state.count}
       <button onClick = {()=>dispatch({type:'INCREMENT'})}>Increment counter  {state.count} </button>
       <button onClick = {()=>dispatch({type:'DECREMENT'})}>DECREMENT countedr </button>
       <button onClick = {()=>dispatch({type:'default'})}>Default counter </button>
    </div>);
}
export default CounterContext;