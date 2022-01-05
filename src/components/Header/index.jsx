import React, { memo } from "react"

import { NavLink } from "react-router-dom"
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style"
import { headerLinks } from "../../common/head-data"

export default memo(function Header() {
	const show = (item, index) => {
		if (index < 3) {
			return <NavLink to={item.link}>{item.title}</NavLink>
		} else {
			return <a href={item.link}>{item.title}</a>
		}
	}

	return (
		<HeaderWrapper>
			<div className="headerItem wrap-v1">
				<HeaderLeft>
					<a href="#/" className="logo sprite_01 ">
						{" "}
					</a>
					<div className="select-list">
						{headerLinks.map((item, index) => {
							return (
								<div key={index} className="select-item">
									{show(item, index)}
								</div>
							)
						})}
					</div>
				</HeaderLeft>
				<HeaderRight>right</HeaderRight>
			</div>
			<div className="divder"></div>
		</HeaderWrapper>
	)
})
