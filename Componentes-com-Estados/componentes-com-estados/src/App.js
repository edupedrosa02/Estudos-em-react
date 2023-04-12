import logo from './logo.svg';
import './App.css';

function handleClick(){
  console.log('Clicou!');
};
function handleChange(){
  console.log('mudou');
};
function handleChange2(){
  console.log('mudou2');
};

function App() {
  return (
 <section> <div><button onClick={handleClick}>Clique me!</button>
  <button onClick={handleChange}>Clique me!</button>
  <button onPointerMove={handleChange2}>Clique me!</button>
</div></section>
  );
}

export default App;
