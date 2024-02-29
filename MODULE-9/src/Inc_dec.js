import React, { useReducer } from 'react'
const initialState ={num:1}
function Inc_dec() {
    const reducerfun=(state,action)=>{
        switch (action.hello) {
            case "test":
                return {num:state.num+1};

                case "test2":
                return {num:state.num-1};
                // break;
        
            default:
                break;
        }
    }
    const [state, dispatch] = useReducer(reducerfun, initialState);
  return (
    <div>
      select product quantity:
      <br/>
      <button onClick={()=>{dispatch({"hello":"test"})}}>+</button>
      {state.num}
      <button onClick={()=>{dispatch({"hello":"test2"})}}>-</button>
    </div>
  )
}

export default Inc_dec
