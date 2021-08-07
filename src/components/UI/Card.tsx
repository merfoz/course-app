import './Card.css'
import React, { ReactNode } from 'react'

 const Card = (props:{children:ReactNode ,className?:string}) => {
     const classes = 'card ' + props.className
    return (
        <div className = {classes}>
            {props.children}
            
        </div>
    )
}
export default Card;
