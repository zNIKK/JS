import React, { setState, useContext } from 'react';
import {CounterContext} from '../counterContext';
 
export default function Counter(props) {
    const [count, setCount] = useContext(CounterContext);
    return (
        <div>
            <div>{count}</div>
            <button onClick={()=> {setCount(prev=> prev - 1)}}>-</button>
            <button onClick={()=> {setCount(prev=> prev + 1)}}>+</button>
        </div>

    )
}