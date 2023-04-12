import './App.css';
import React from 'react';


 class App extends React.Component {
constructor(){
  super()
  this.handleClick=this.handleClick.bind(this);
  this.handleChange=this.handleClick.bind(this);
  this.handleChange2=this.handleClick.bind(this);
}
  handleClick(){
    console.log('Clicou!');
  };
  handleChange(){
    console.log('mudou');
  };
  handleChange2(){
    console.log('mudou2');
  };
  render() {
    return (
      <div>
        <button type="button" onClick={ this.handleClick }>Botão 1</button>
        <button type="button" onClick={ this.handleChange }>Botão 2</button>
        <button type="button" onPointerMove={ this.handleChange2 }>Botão 3</button>
      </div>
    )
  }
}

export default App;