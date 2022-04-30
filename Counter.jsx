import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount, decrementCount } from "../store/action";

const Counter = ()=>{
    const count = useSelector((state)=> state.count);
    const dispatch = useDispatch();
    return(
        <div>
            Counter: {count}
            <div>
                <button onClick={()=> dispatch(incrementCount(1))}>Increment</button>
                <button onClick={()=> dispatch(decrementCount(1))}>Decrement</button>
            </div>
            <hr/>
            <div>
                <button onClick={()=> dispatch(incrementCount(5))}>Increment by 5</button>
                <button onClick={()=> dispatch(decrementCount(20))}>Decrement by 20</button>
            </div>
            
        </div>
    )
};
export default Counter;