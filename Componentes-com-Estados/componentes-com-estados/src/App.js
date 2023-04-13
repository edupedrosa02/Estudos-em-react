import './App.css';
import React from 'react';

 class App extends React.Component {
constructor(){
  super()
  this.state={
    numeroDeCliques:0
  }

  this.handleClick=this.handleClick.bind(this);
  // this.handleChange=this.handleClick.bind(this);
  // this.handleChange2=this.handleClick.bind(this);
}
  handleClick(){
    this.setState((estadoAnterior, _props)=>({
      numeroDeCliques: estadoAnterior.numeroDeCliques +1
    }))
    };

    getButtonColor(num) {
      return num % 2 === 0 ? 'green' : 'white'
    };

  render() {
    const {numeroDeCliques, getButtonColor} = this.state;
    return (
      <div>
        <button type="button"
         onClick={ this.handleClick }
         style={{backgroundColor: this.getButtonColor(numeroDeCliques)} }>
          {`Cliques botão: ${numeroDeCliques}`}
          </button>
      </div>
    )
  }
}

export default App;