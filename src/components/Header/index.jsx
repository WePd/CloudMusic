import React, { memo } from "react"

import { NavLink } from "react-router-dom"
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style"
import { headerLinks } from "../../common/head-data"
import { Input, Button } from "antd"
import { SearchOutlined } from "@ant-design/icons"

export default memo(function Header() {
	const show = (item, index) => {
		if (index < 3) {
			return (
				<NavLink to={item.link} exact>
					{item.title}
					<i className="sprite_01 icon"></i>
				</NavLink>
			)
		} else {
			return <a href={item.link}>{item.title}</a>
		}
	}

	return (
		<HeaderWrapper>
			<div className="headerItem wrap-v1">
				<HeaderLeft>
					<a href="#/" className="logo sprite_01">
						{"网易云音乐"}
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
				<HeaderRight>
					<Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
					<Button className="center">创作者中心</Button>
					<a href="/">登录</a>
				</HeaderRight>
			</div>
			<div className="divder"></div>
		</HeaderWrapper>
	)
})
