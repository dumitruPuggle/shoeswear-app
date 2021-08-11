import React from 'react'
import * as IoniIcons from "react-icons/io5";

export default function Icon(props){
	let ReturnIcon = IoniIcons[props.icon]
	return(
		<ReturnIcon size={props.size} style={props.customStyling}/>
	)
}