import React from 'react'
import ListItem from './ListItem'
export default function List(props){
    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {   
                props.data.map((item, index) => {
                    return (
                        <ListItem key={index} iconName={item.iconName} name={item.name} href={item.href}/>
                    )
                })
            }
        </div>
    )
}