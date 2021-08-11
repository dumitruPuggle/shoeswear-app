import React from 'react'
import {NavLink} from "react-router-dom";
import * as IoniIcons from "react-icons/io5";
import { useTranslation } from 'react-i18next'
import LanguageMetadata from '../../../lang/metadata.json'

const styles = {
	NavLink: {
		fontSize: 18,
		color: '#424242',
		textDecoration: 'none',
        marginRight: 10,
		whiteSpace: 'nowrap',
		display: 'flex', 
		flexDirection: 'row', 
		alignItems: 'center'
	},
	NavLinkActive: {
		fontSize: 18,
		color: '#0088CC',
		textDecoration: 'none'
	}
}
export default function ListItem(props){
	const { t } = useTranslation();
    return(
		<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
			<NavLink style={styles.NavLink} activeStyle={styles.NavLinkActive} to={props.href}>
				<Icon icon={props.iconName}/>
				{props.name.includes(LanguageMetadata.parserKey) ? t(props.name.replace(LanguageMetadata.parserKey, "")) : props.name}
			</NavLink>
		</div>
    )
}

function Icon(props){
	let ReturnIcon = IoniIcons[props.icon]
	return(
		<ReturnIcon size={20} style={{marginRight: 5}}/>
	)
}