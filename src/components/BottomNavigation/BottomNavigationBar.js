import React from 'react'
import {Container} from 'react-bootstrap'
import * as IoniIcons from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Routes from '../NavigationBar/routes.json'

const styles = {
    NavLink: {
        fontFamily: 'Roboto',
        fontSize: 14,
        color: 'rgb(0, 0, 0, 1)',
        opacity: 0.5, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center', 
        textDecoration: 'none'
    },
    NavLinkActive: {
        color: '#0d6efd',
        opacity: 1,
        transition: '0.12s linear'
    }
}
export default function BottomNavigationBar(){
    return(
        <Container style={{zIndex: 100, position: 'fixed', left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(0,0,0, 0.03)', borderTopLeftRadius: 10, borderTopRightRadius: 10, backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)'}}>
            <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                {
                    Routes['mobile'].map((item, index) => {
                        return <Item key={index} href={item.href} icon={item.icon} title={item.name}/>      
                    })
                }
            </div>
        </Container>
    )
}

function Item(props){
    return(
        <div style={{width: '100%', padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <NavLink style={styles.NavLink} activeStyle={styles.NavLinkActive} to={props.href}>
                <Icon icon={props.icon}/>
                <p style={{marginBottom: 0}}>{props.title}</p>
            </NavLink>
        </div>
    )
}

function Icon(props){
    let Icon = IoniIcons[props.icon]
    return(
        <Icon style={{marginBottom: 5}} size={20}/>
    )
}