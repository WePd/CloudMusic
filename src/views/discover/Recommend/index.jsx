import React, { useEffect, useState } from "react"
import { Carousel } from "antd"

export default function Recommend() {
	const contentStyle = {
		height: "160px",
		color: "#fff",
		lineHeight: "160px",
		textAlign: "center",
		background: "#364d79"
	}
	useEffect(() => {}, [])
	return (
		<Carousel effect="fade">
			<div>
				<h3 style={contentStyle}> </h3>
			</div>
		</Carousel>
	)
}
