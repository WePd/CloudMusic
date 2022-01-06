import React, { memo } from "react"
import { dicoverMenu } from "../../common/head-data"
import { renderRoutes } from "react-router-config"

import { NavLink } from "react-router-dom"
import "./style.scss"
export default memo(function Discover(props) {
	// console.log(props)
	const { routes } = props.route
	return (
		<div>
			<div className="discover-top">
				<div className="top">
					{dicoverMenu.map((item, index) => {
						return (
							<div className="item" key={item.title}>
								<NavLink to={item.link}>{item.title}</NavLink>
							</div>
						)
					})}
				</div>
			</div>
			{renderRoutes(routes)}
		</div>
	)
})
