import React from 'react'
import {Card, Elevation} from '@blueprintjs/core'
import * as IoniIcons from "react-icons/io5";
import {Button} from '@material-ui/core'
import {Container, Row, Col} from 'react-bootstrap'
import {RegionManager, setRegion} from '../components/RegionManager/RegionManager'
const data = {
    "countries": [
        {
            "countryName": "Moldova",
            "countryShortCode": "MD",
            "countryOutlinedPreview": "https://res.cloudinary.com/supermotion/image/upload/v1628274265/shoeswear-app-static/Regions/md-02_bcle2c.svg",
            "regions": [
                {
                    "name": "Anenii Noi",
                    "shortCode": "AN"
                },
                {
                    "name": "Basarabeasca",
                    "shortCode": "BS"
                },
                {
                    "name": "Bălți",
                    "shortCode": "BA"
                },
                {
                    "name": "Bender",
                    "shortCode": "BD"
                },
                {
                    "name": "Briceni",
                    "shortCode": "BR"
                },
                {
                    "name": "Cahul",
                    "shortCode": "CA"
                },
                {
                    "name": "Cantemir",
                    "shortCode": "CT"
                },
                {
                    "name": "Călărași",
                    "shortCode": "CL"
                },
                {
                    "name": "Căușeni",
                    "shortCode": "CS"
                },
                {
                    "name": "Chișinău",
                    "shortCode": "CU"
                },
                {
                    "name": "Cimișlia",
                    "shortCode": "CM"
                },
                {
                    "name": "Criuleni",
                    "shortCode": "CR"
                },
                {
                    "name": "Dondușeni",
                    "shortCode": "DO"
                },
                {
                    "name": "Drochia",
                    "shortCode": "DR"
                },
                {
                    "name": "Dubăsari",
                    "shortCode": "DU"
                },
                {
                    "name": "Edineț",
                    "shortCode": "ED"
                },
                {
                    "name": "Fălești",
                    "shortCode": "FA"
                },
                {
                    "name": "Florești",
                    "shortCode": "FL"
                },
                {
                    "name": "Găgăuzia",
                    "shortCode": "GA"
                },
                {
                    "name": "Glodeni",
                    "shortCode": "GL"
                },
                {
                    "name": "Hîncești",
                    "shortCode": "HI"
                },
                {
                    "name": "Ialoveni",
                    "shortCode": "IA"
                },
                {
                    "name": "Leova",
                    "shortCode": "LE"
                },
                {
                    "name": "Nisporeni",
                    "shortCode": "NI"
                },
                {
                    "name": "Ocnița",
                    "shortCode": "OC"
                },
                {
                    "name": "Orhei",
                    "shortCode": "OR"
                },
                {
                    "name": "Rezina",
                    "shortCode": "RE"
                },
                {
                    "name": "Rîșcani",
                    "shortCode": "RI"
                },
                {
                    "name": "Sîngerei",
                    "shortCode": "SI"
                },
                {
                    "name": "Soroca",
                    "shortCode": "SO"
                },
                {
                    "name": "Stânga Nistrului",
                    "shortCode": "SN"
                },
                {
                    "name": "Strășeni",
                    "shortCode": "ST"
                },
                {
                    "name": "Șoldănești",
                    "shortCode": "SD"
                },
                {
                    "name": "Ștefan Vodă",
                    "shortCode": "SV"
                },
                {
                    "name": "Taraclia",
                    "shortCode": "TA"
                },
                {
                    "name": "Telenești",
                    "shortCode": "TE"
                },
                {
                    "name": "Ungheni",
                    "shortCode": "UN"
                }
            ]
        }
    ]
}
export default function Region(props){
    RegionManager()
    const layoutHorizontal = {
        display: 'flex',
        flexDirection: 'row'
    }
    const layoutVertical = {
        display: 'flex',
        flexDirection: 'column'
    }
    return(
        <Container style={{paddingTop: 30, fontFamily: 'Roboto'}}>
            <h1 style={{marginBottom: 20}}>Selectați-vă regiunea:</h1>
            {
                data['countries'].map((country, index) => {
                    return(
                        <div key={Math.random()}>
                            <div style={{...layoutHorizontal}}>
                                <img alt={"Country Preview"} style={{width: '300px'}} src={country.countryOutlinedPreview}/>
                                <div style={{...layoutVertical, marginLeft: 20}}>
                                    <p style={{fontSize: 24, fontWeight: 500}}>{country.countryName}</p>
                                    <pre>{country.countryShortCode}</pre>
                                </div>
                            </div>
                            <Row style={{marginTop: 15, marginBottom: 30}}>
                            {
                                country.regions.map((item, index) => {
                                    return(
                                        <Col key={Math.random()} style={{marginBottom: 15}} xs="auto">
                                            <Card elevation={Elevation.ONE} style={{padding: 10, borderRadius: 10}}>
                                                <Row>
                                                    <Col style={{...layoutHorizontal, alignItems: 'center', margin: 5}} sm>
                                                        <div style={{alignItems: 'center', marginRight: 10}}>
                                                            <Icon iconColor={"#8D949E"} icon={'IoLocationSharp'}/>
                                                        </div>
                                                        <div>
                                                            <p style={{fontSize: 16, fontWeight: 500, marginBottom: 0, whiteSpace: 'nowrap', overflow: 'auto'}}>{item.name}</p>
                                                            <pre style={{margin: 0}}>{item.shortCode}</pre>
                                                        </div>
                                                    </Col>
                                                    <Col style={{...layoutHorizontal, alignItems: 'center', justifyContent: 'flex-end', marginLeft: 20}} sm>
                                                        <ButtonCheckSelected regionName={item.name} shortCode={item.shortCode}/>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                            </Row>
                        </div>
                    )
                })
            }
        </Container>
    )
}

function ButtonCheckSelected(props){
    const isNonNull = RegionManager()
    const regionName = props.regionName
    const shortCode = props.shortCode
    const setCustomRegion = () => {
        setRegion({regionName: regionName, region: shortCode})
    }
    if(isNonNull) {
        if(RegionManager().region === shortCode){
            return(
                <Button style={{color: '#00A400', height: '100%'}}>
                    <Icon icon={'IoCheckmarkSharp'}/>
                </Button>
            )
        }
    }
    return(
        <Button onClick={() => setCustomRegion()} style={{color: '#1877F2', height: '100%'}}>
            <Icon icon={'IoChevronForwardSharp'}/>
        </Button>
    )
}

function Icon(props){
	let Icon = IoniIcons[props.icon]
	return(
		<Icon size={30} color={props.iconColor}/>
	)
}