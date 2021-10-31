import './App.scss';
import React,{useState} from 'react'
import NameTag from './components/NameTag';

const initNames = [
  {firstName:'bikash',lastName:'dash'},
  {firstName:'pitar',lastName:'parker'},
  {firstName:'brush',lastName:'wain'},
]
function App() {
  const [user, setUser] = useState(initNames)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Name List</h1>
        {user.map((usr,index)=>{
          return (<NameTag key={index} style={{color:'red'}} firstName={usr.firstName} lastName={usr.lastName} ></NameTag>)
        })}
        
      </header>
    </div>
  );
}

export default App;
