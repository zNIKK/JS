import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        // this.state = localStorage.getItem("state")
        // this.state = {count: this.props.count }
        this.state = { count: 0 }

        this.add = this.add.bind(this)
    }

    add() {
        // this.setState({count: this.state.count + 1 })
        this.setState((state) => { return { count: state.count + 1 } }, () => {
            console.log(this.state)
        })

    }

    // shouldComponentUpdate() {
    //     // fazer com que mo componente n atualize
    //     return false;
    // }

    componentDidMount() {
        document.title = this.state.count;
        // Só atualizar o componente quando for apresentado na tela
        this.setState(JSON.parse(localStorage.getItem('state')))
    }

    componentWillUnmount() {
        // Sempre que o componente for removido da tela
    }

    componentDidUpdate() {
        // Quando o componente for atualizado
        document.title = this.state.count;
        localStorage.setItem("state", JSON.stringify(this.state))
    }
    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.add}>add</button>
            </div>
        )
    }
}

export default Counter;