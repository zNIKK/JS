import React, {useState, createContext} from "react";

// Criando um context
export const CounterContext = createContext();

export function CounterProvider(props) {
    const [count, setCount] = useState(0);
    
    return (
        <CounterContext.Provider value={[count, setCount]}>
            {props.children}
        </CounterContext.Provider>
    );
}