import React, { useState } from 'react'
import './App.scss'
import Item from './components/Item'
import UseList from './hooks/useList'
const initialList = [
  { name: "tomato", calorie: 20 },
  { name: "rice", calorie: 50 },
  { name: "candy", calorie: 150 },
]


export default function App() {
  const useList = UseList(initialList);

  return (
    <div>
      {useList.list.map((item, index) => {
        return (<Item key={index} changeEdit={useList.changeEdit} name={item.name} HandleEdit={useList.HandleEdit} editable={useList.editable} removeItem={useList.removeItem} calorie={item.calorie} />)
      })}

      <button onClick={() => useList.handleCalory()} className='remove-button'>remove Button</button>
    </div>
  )
}

