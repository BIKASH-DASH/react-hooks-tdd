import React from 'react'
import './Item.scss'
export default function Item({name,calorie,removeItem,editable,HandleEdit,changeEdit}) {
    return (
        <div className='Item'>
            {(editable)?<input onKeyPress={(event)=>HandleEdit(name,event)} defaultValue={name}></input>:
             <h3 onDoubleClick={(e)=>changeEdit()}>{name}</h3>}
           
            <h3>{calorie}</h3>
            <button onClick={()=>removeItem(name)} className='remove-button'>remove</button>
        </div>
    )
}
