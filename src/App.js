import React, { useEffect, useRef } from 'react'

export default function App() {
  const nameRef = useRef();
  const ageRef = useRef();
  const marredRef = useRef();
  const submitRef = useRef();
  useEffect(() => {
    nameRef.current.focus();
  }, [])

  const keyPressHandle = (e) => {
    if (e.keyCode === 13) {
      switch (e.target.id) {
        case 'nameInput':
          ageRef.current.focus();
          break;
        case 'ageInput':
          marredRef.current.focus();
          break;
        case 'marriedInput':
          submitRef.current.focus();
          break;

        default:
          break;
      }

    }
  }

  const handleSubmit = (e)=>{
    alert();
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>UseRefs Hooks</h3>
        <div className='form-control'>
          <span>name</span>
          <input ref={nameRef} type={"text"} id="nameInput" onKeyDown={keyPressHandle} ></input>
        </div>
        <div>
          <span>age</span>
          <input ref={ageRef} type={"text"} id="ageInput" onKeyDown={keyPressHandle}></input>
        </div>
        <div>
          <span>married</span>
          <input ref={marredRef} type={"checkbox"} id="marriedInput" onKeyDown={keyPressHandle} ></input>
        </div>
        <div>
          <button ref={submitRef} id="submitInput" onClick={handleSubmit}>submit</button>
        </div>
      </header>
    </div>
  )
}
