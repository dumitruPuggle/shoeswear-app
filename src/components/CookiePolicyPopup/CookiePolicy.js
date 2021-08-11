import React, {useState, useEffect} from 'react'
import {Card, Elevation} from '@blueprintjs/core'
import {Row, Col} from 'react-bootstrap'
import Button from '@material-ui/core/Button'
import * as IoniIcons from "react-icons/io5";
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next'

export default function CookiePolicy(props){
    const { t } = useTranslation();
    const layoutHorizontal = {
        display: 'flex',
        flexDirection: 'row'
    }
    const layoutVertical = {
        display: 'flex',
        flexDirection: 'column'
    }
    const [isVisible, setVisible] = useState(true)
    useEffect(() => {
        if(Cookies.get('cookiesAllowed') !== undefined){
            const cookiesAllowed = Cookies.get('cookiesAllowed')
            if(cookiesAllowed){
                setVisible(false)
            }else{
                setVisible(true)
            }
        }
    }, [])
    const acceptAll = (booleanValue) => {
        setVisible(false)
        Cookies.set('cookiesAllowed', booleanValue)
    }
    return(
        <>
            {
                isVisible &&
                <div style={{position: 'fixed', maxWidth: '500px', bottom: 0, right: 0, margin: 20, zIndex: 300}}>
                    <Card elevation={Elevation.ONE} style={{backgroundColor: '#303338', color: 'white', borderRadius: 10, padding: 10, fontFamily: 'Roboto'}}>
                        <div style={{...layoutVertical, alignItems: 'center'}}>
                            <div style={{...layoutVertical}}>
                                <Row style={{marginBottom: 10}}>
                                    <Col style={{...layoutHorizontal, alignItems: 'center', justifyContent: 'flex-start'}}>
                                        <div>
                                            <Icon size={28} icon={"IoInformationCircleSharp"}/>
                                        </div>
                                        <p style={{fontSize: 20, fontWeight: 500, marginLeft: 3, marginBottom: 0, marginRight: 10}}>{t('cookiePolicyTitle')}</p>
                                    </Col>
                                    <Col style={{...layoutHorizontal, alignItems: 'center', justifyContent: 'flex-end'}}>
                                        <div onClick={() => setVisible(false)} style={{padding: 5, borderRadius: '100%', backgroundColor: 'rgb(0, 0, 0, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                            <Icon size={20} iconColor={"rgb(255, 255, 255, 0.2)"} icon={"IoClose"} />
                                        </div>
                                    </Col>
                                </Row>
                                <p style={{fontSize: 16, fontWeight: 400, marginBottom: 0, marginRight: 10, opacity: 0.5}}>
                                    {t('cookiePolicyDesc')}
                                </p>
                            </div>
                            <div style={{...layoutHorizontal, marginTop: 10, width: '100%'}}>
                                <Button onClick={() => acceptAll(false)} style={{flex: 1, color: '#FA383E', marginRight: 10}}>
                                    {t('doNotAccept')}
                                </Button>
                                <Button onClick={() => acceptAll(true)} style={{flex: 1, color: '#3578E5'}}>
                                    {t('acceptAll')}
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            }
        </>
    )
}

function Icon(props){
	let Icon = IoniIcons[props.icon]
	return(
		<Icon size={props.size} color={props.iconColor}/>
	)
}