import React from 'react'
import { useTranslation } from 'react-i18next'
import {Container, Row, Col} from 'react-bootstrap'
import {Card, Elevation} from '@blueprintjs/core'
import {Button} from '@material-ui/core'
import IoniIcons from '../components/Icon/Icon'
import LanguageList from '../lang/choose-languageList.json'
import LanguageManager from '../lang/LanguageManager'
export default function Languages(){
    const { t } = useTranslation();
    const layoutHorizontal = {
        display: 'flex',
        flexDirection: 'row'
    }
    const layoutVertical = {
        display: 'flex',
        flexDirection: 'column'
    }
    const setLanguage = (lang) => {
        LanguageManager({setLanguage: lang})
        window.location.reload()
    }
    return(
        <Container style={{paddingTop: 20, fontFamily: 'Roboto'}}>
            <h1 style={{marginBottom: 20}}>{t('select-language')}:</h1>
            <Row xs={1} md={3}>
                {
                    LanguageList.map((item) => {
                        return(
                            <Col key={Math.random()} style={{marginBottom: 20}}>
                                <Card elevation={Elevation.ONE} style={{borderRadius: 10, padding: 10}}>
                                    <Row>
                                        <Col style={{...layoutHorizontal, alignItems: 'center'}}>
                                            <div style={{alignItems: 'center', paddingLeft: 5}}>
                                                <IoniIcons size={20} customStyling={{color: '#77A7FF', marginRight: 5}} icon={'IoLanguageOutline'}/>
                                            </div>
                                            <div style={{...layoutVertical}}>
                                                <p style={{marginBottom: 3, fontWeight: 500, fontSize: 18, color: '#1877F2'}}>{item.name}</p>
                                                <small>{item.description}</small>
                                            </div>
                                        </Col>
                                        <Col style={{...layoutHorizontal, alignItems: 'center', justifyContent: 'flex-end'}}>
                                            {
                                                LanguageManager({getLanguageKey: true}) === item.key ?
                                                <Button style={{color: '#00A400', height: '100%'}}>
                                                    <IoniIcons size={25} icon={'IoCheckmarkSharp'}/>
                                                </Button>
                                                :
                                                <Button onClick={() => setLanguage(item.key)} style={{color: '#1877F2', height: '100%'}}>
                                                    <IoniIcons size={25} icon={'IoChevronForwardSharp'}/>
                                                </Button>
                                            }
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}