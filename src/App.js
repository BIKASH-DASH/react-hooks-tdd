import './App.scss';

const nameStyle = {color:"green",paddingTop:'1px',}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Name List</h1>
        <h3 style={nameStyle}>bikash</h3>
        <h3>dash</h3>
      </header>
    </div>
  );
}

export default App;
