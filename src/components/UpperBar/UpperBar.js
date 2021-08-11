import React from 'react'
import LanguageManager from '../../lang/LanguageManager'
import Button from '@material-ui/core/Button'
import {Row, Col} from 'react-bootstrap'
import * as IoniIcons from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Routes from '../NavigationBar/routes.json'
import {RegionManager} from '../RegionManager/RegionManager'

const layoutHorizontal = {
    display: 'flex',
    flexDirection: 'row'
}
export default function Upperbar(){
    return(
        <div style={{...layoutHorizontal, zIndex: 100, alignItems: 'center', padding: 10, borderBottom: '1px solid rgb(0, 0, 0, 0.1)'}}>
            <Row style={{width: '100%'}}>
                <Col style={{...layoutHorizontal, fontFamily: 'Roboto', color: 'white'}}>
                    <NavLink style={{textDecoration: 'none'}} to={Routes.other.selectRegion}>
                        <Button size="small" style={{marginRight: 10}} variant="outlined">
                            <Icon size={18} icon={"IoLocationOutline"}/>
                            {RegionManager().city}
                        </Button>
                    </NavLink>
                    <Button size="small" variant="outlined">
                        <Icon size={18} icon={"IoCubeOutline"}/>
                        Livrare gratuită
                    </Button>
                </Col>
                <Col style={{...layoutHorizontal, justifyContent: 'flex-end', padding: 0}}>
                    <NavLink style={{textDecoration: 'none'}} to={Routes.other.selectLanguage}>
                        <Button size="small" variant="outlined">
                            <Icon size={18} icon={"IoLanguage"}/>
                            {LanguageManager({getLanguageName: true})}
                        </Button>
                    </NavLink>
                </Col>
            </Row>
        </div>
    )
}

function Icon(props){
	let Icon = IoniIcons[props.icon]
	return(
		<Icon size={props.size} style={{marginRight: 5}} color={props.iconColor}/>
	)
}