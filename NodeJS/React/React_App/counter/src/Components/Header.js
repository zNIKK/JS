import React, { useContext } from 'react';
import { CounterContext } from "../counterContext";

export default function Header(props) {

    const [count, setCount ] = useContext(CounterContext)
    return (
        <div className='header'>
                <h3>Contador</h3>
                <div>{count}</div>
        </div>
    );
}