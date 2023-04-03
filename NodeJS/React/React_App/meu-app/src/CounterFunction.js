import React, { useEffect, useState } from 'react';

function Counter(props) {
    
    // declara uma nova variável de estado
    const [count, setCount] = useState(props.count);
    // const [meuEstado, setMeuEstado] = useState("qualquer coisa");

    useEffect(() => {
        setCount(parseInt(localStorage.getItem("count")))

        return ()=> {
            console.log("Não tem mais contador")
        }
    }, [])

    // Similar ao componentDidMount e componentDidUpdate:
    useEffect(() => {
        // Atualiza o título do documento usando a API do browser

        document.title = count;
        localStorage.setItem("count", count);

        setCount(parseInt(localStorage.getItem("count")))

    }, [count]);

    function add() {
        
        setCount(count + 1);
        // console.log(meuEstado);
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={add}>add</button>
        </div>
    );

};

export default Counter;