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
      numeroDeCliques: estadoAnterior.numeroDeCliques+1
    }))
    };

  // handleChange(){
  //   numeroDeCliques:1  };

  // handleChange2(){
  //   console.log('mudou2');
  // };
  render() {
    const {numeroDeCliques} = this.state
    return (
      <div>
        <button type="button" onClick={ this.handleClick }>{numeroDeCliques}</button>
        {/* <button type="button" onClick={ this.handleChange }>Botão 2</button>
        <button type="button" onPointerMove={ this.handleChange2 }>Botão 3</button> */}
      </div>
    )
  }
}

export default App;