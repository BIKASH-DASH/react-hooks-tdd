import React from 'react'

export default function NameTag(props) {
    return (
        <div className='name'>
        <h3 className='nameTag'>{ props.firstName}</h3>
        <h3 className='nameTag'>{ props.lastName}</h3>
        </div>
    )
}