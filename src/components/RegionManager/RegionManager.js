import {useState, useEffect} from 'react'
import axios from 'axios'
import Routes from '../NavigationBar/routes.json'
function RegionManager(props){
    const [region, setRegion] = useState('NOT-FIXED')
    useEffect(() => {
        if(localStorage.getItem('region') == null){
            axios.get(Routes['other'].ipAPIEndpoint)
            .then((response) => {
                const data = response.data
                setRegion(data)
                localStorage.setItem('region', JSON.stringify(data))
            })
        }else{
            setRegion(JSON.parse(localStorage.getItem('region')))
        }
    }, [])
    return region
}
function setRegion(props){
    const data = {
        city: props.regionName,
        region: props.region
    }
    localStorage.setItem('region', JSON.stringify(data))
    window.location.reload()
}
export{
    RegionManager,
    setRegion
}