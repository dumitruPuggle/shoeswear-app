import React from 'react'
import * as IoniIcons from "react-icons/io5"
import { useMediaQuery } from 'react-responsive'

export default function NotFound(){
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return(
        <div style={{backgroundColor: 'rgb(246, 246, 246)', position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: isDesktopOrLaptop && '600px', padding: isTabletOrMobile && '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'gray'}}>
                <Icon icon={"IoBanOutline"} />
                <h1 style={{fontWeight: 700}}>Pagina nu a fost găsită </h1>
                <small style={{fontSize: 16, marginBottom: 20, textAlign: 'center', fontFamily: 'Roboto'}}>
                    Cu părere de rău, pagina care ați încercat să o vizitați, 
                    posibil să fie fost ștearsă, sau dezactivată. 
                    Anunțați furnizorul care v-a trimis aici, că acest link este spart.
                </small>
            </div>
        </div>
    )
}
function Icon(props){
	let Icon = IoniIcons[props.icon]
	return(
		<Icon size={60} color={props.iconColor}/>
	)
}