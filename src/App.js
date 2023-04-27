import './App.css';
import Board from './components/Board/Board';
import Button from './components/Button/Button';

function App() {
  return (
    <div
      className="App">
      <h1>Tic-tac-toe</h1>
      <Board />
      <Button
        buttonName='Clear grids'
        onClick={ () => {
          console.log('click');
        } }
      />
    </div>
  );
}

export default App;
