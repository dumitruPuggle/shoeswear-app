import React from 'react'
import { useMediaQuery } from 'react-responsive'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@blueprintjs/core/lib/css/blueprint.css'
import './App.css';
import WebFont from 'webfontloader';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpperBar from './components/UpperBar/UpperBar'
import NavigationBar from './components/NavigationBar/NavigationBar'
import BottomNavigationBar from './components/BottomNavigation/BottomNavigationBar'
import Footer from './components/Footer/Footer'

import Home from './views/Home'
import Products from './views/Products'
import Region from './views/Region'
import Languages from './views/Languages'
import NotFound from './views/NotFound'
import Authentification from './views/Auth'

function App() {
	WebFont.load({
		google: {
			families: [
				'Roboto:100,200,300,400,500,600,700,800', 'sans-serif',
				'Roboto+Mono:100,300,400,700,900', 'sans-serif',
				'Libre+Baskerville:400,700', 'sans-serif'
			]
		}
	});
	const Desktop = ({ children }) => {
		const isDesktop = useMediaQuery({ minWidth: 992 })
		return isDesktop ? children : null
	}
	const Tablet = ({ children }) => {
		const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
		return isTablet ? children : null
	}
	const Mobile = ({ children }) => {
		const isMobile = useMediaQuery({ maxWidth: 767 })
		return isMobile ? children : null
	}
	return (
		<Router>
			<NavigationBar />
			<Switch>
				<Route exact path="/">
					<Desktop>
						<UpperBar />
					</Desktop>
					<Home />
					<Desktop>
						<Footer />
					</Desktop>
				</Route>
				<Route path="/products">
					<Products />
					<Desktop>
						<Footer />
					</Desktop>
				</Route>
				<Route path="/search">
					
				</Route>
				<Route path="/cart">
					
				</Route>
				<Route path="/profile">
					
				</Route>
				<Route path="/select-region">
				 	<Region />
					<Desktop>
						<Footer />
					</Desktop>
				</Route>
				<Route path="/select-language">
					<Languages />
				</Route>
				<Route path="/auth">
					<Authentification />
					<Desktop>
						<Footer />
					</Desktop>
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
			<Mobile>
				<BottomNavigationBar />
			</Mobile>
			<Tablet>
				<BottomNavigationBar />
			</Tablet>
		</Router>
	);
}

export default App;
