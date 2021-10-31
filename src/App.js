import './App.scss';
import NameTag from './components/NameTag';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Name List</h1>
        <NameTag firstName="bikash" lastName="dash" ></NameTag>
        <NameTag  ></NameTag>
      </header>
    </div>
  );
}

export default App;
