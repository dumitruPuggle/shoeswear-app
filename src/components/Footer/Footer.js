import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import logo from '../../logo.svg'
import acceptedPayments from './accepted-payments.svg'
const data = [
    {
        "sectionTitle": "Companie",
        "sectionContent": [
            {
                "title" :  "Despre noi",
            },
            {
                "title":  "Termeni și condiții"
            },
            {
                "title": "Contacte"
            }
        ]
    },
    {
        "sectionTitle": "Încălțăminte",
        "sectionContent": [
            {
                "title" : "De fotbal",
            },
            {
                "title": "De basket"
            },
            {
                "title": "De oraș"
            },
            {
                "title": "De tennis"
            }
        ]
    }
]
export default function Footer(){
    return(
        <div style={{width: '100%', padding: 30, backgroundColor: 'rgb(0, 0, 0, 0.03)', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Container style={{fontFamily: "Roboto"}}>
                <Row style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Col style={{display: 'flex', flexDirection: 'column'}}>
                        <Logo size={"large"}/>
                        <p style={{marginTop: 10, marginBottom: 0, color: 'rgb(123, 123, 123)'}}>SRL "Ovidiu Rusu". Toate drepturile de autor rezervate.</p>
                    </Col>
                    {
                        data.map((item, index) => {
                            return (
                                <Col key={Math.random()} style={{display: 'flex', flexDirection: 'column'}}>
                                    <h5>{item.sectionTitle}</h5>
                                    {
                                        item.sectionContent.map((item, index) => {
                                            return(
                                                <LinkItem key={Math.random()} title={item.title}/>
                                            )
                                        })
                                    }
                                </Col>
                            )
                        })
                    }
                    <Col style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center'}}>
                        <h5>Metode de achitare:</h5>
                        <img alt={"Accepted Payments"} width={100} src={acceptedPayments} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

function Logo(props){
	return(
        <img alt={'logo'} width={230} src={logo} />
	)
}

function LinkItem(props){
    return(
        <p style={{color: "rgb(123, 123, 123)", marginBottom: 8, fontSize: 16, fontWeight: 400}}>{props.title}</p>
    )
}