import React, { memo, useEffect, useRef } from "react"
import { useSelector, shallowEqual } from "react-redux"

import { Carousel } from "antd"
import "./style.scss"

export default memo(function TopCarousel() {
	const { banners } = useSelector(
		state => ({
			banners: state.getIn(["recommend", "banners"])
		}),
		shallowEqual
	)
	useEffect(() => {})
	const bannRef = useRef()
	console.log(bannRef)
	return (
		<div className="wrapper">
			<div className="wrapper-item wrap-v2">
				<div className="wrapper-left ">
					<Carousel effect="fade" autoplay ref={bannRef}>
						{banners.map((item, index) => {
							return (
								<div key={item.imageUrl} className="banner-item">
									<img src={item.imageUrl} className="image" alt={item.typeTitle} />
								</div>
							)
						})}
					</Carousel>
				</div>
				<div className="wrapper-right">
					<a href="https://music.163.com/#/download"> </a>
				</div>
				<div className="Btn">
					<button className="btn left" onClick={e => bannRef.current.prev()}></button>
					<button className="btn right" onClick={e => bannRef.current.next()}></button>
				</div>
			</div>
		</div>
	)
})
