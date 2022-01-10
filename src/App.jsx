import React, { memo } from "react"
import { renderRoutes } from "react-router-config"
import routes from "./router"
import { Provider } from "react-redux"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { HashRouter } from "react-router-dom"
import store from "./redux"
import PlayerBar from "./views/player/PlayerBar"

export default memo(function App() {
	return (
		<Provider store={store}>
			<HashRouter>
				<Header />
				{renderRoutes(routes)}
				<Footer />
				<PlayerBar />
			</HashRouter>
		</Provider>
	)
})
