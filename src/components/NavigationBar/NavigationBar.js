import React from 'react'
import { NavLink } from "react-router-dom";
import NavList from './NavList/List'
import Routes from './routes.json'
import { Navbar, Container } from 'react-bootstrap';
import logo from '../../logo.svg'
import * as IoniIcons from "react-icons/io5";
import { useMediaQuery } from 'react-responsive'

function NavigationBar(){
	const Desktop = ({ children }) => {
		const isDesktop = useMediaQuery({ minWidth: 992 })
		return isDesktop ? children : null
	}
	// const Mobile = ({ children }) => {
	// 	const isMobile = useMediaQuery({ maxWidth: 767 })
	// 	return isMobile ? children : null
	// }
	const isFirefox = typeof InstallTrigger !== 'undefined';
	return(
		<Navbar sticky={"top"} style={{background: isFirefox ? 'rgb(255, 255, 255, 0.85)' : 'rgb(0, 0, 0, 0))', backdropFilter: !isFirefox && 'blur(70px)', WebkitBackdropFilter: !isFirefox && 'blur(70px)', zIndex: 100, padding: 15, fontFamily: 'Roboto', borderBottom: '1px solid rgb(0, 0, 0, 0.2)'}}>
			<Desktop>
				<NavList data={Routes["left"]}/>
			</Desktop>
			<Container style={{display: 'flex', justifyContent: 'center'}}>
				<NavLink to={Routes.other.main}>
					<Logo size={"large"}/>
				</NavLink>
			</Container>
			<Desktop>
				<div style={{marginRight: 10, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
					<Icon iconColor={"green"} icon={'IoArrowBackCircle'}/>
					<span>Deschiși</span>
				</div>
				<NavList data={Routes["right"]}/>
			</Desktop>
		</Navbar>
	)
}

function Logo(props){
	return(
		<img width={props.size === "small" ? 100 : props.size === "normal" ? 150 : props.size === "large" ? 200 : null} alt={'shoeswear®'} src={logo} />
	)
}

function Icon(props){
	let Icon = IoniIcons[props.icon]
	return(
		<Icon size={23} style={{marginRight: 5}} color={props.iconColor}/>
	)
}

export default NavigationBar