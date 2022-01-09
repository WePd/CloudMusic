import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getBannersAction } from "../../../redux/recommend/action"

import TopCarousel from "./TopCarousel"
import HotRecommend from "./HotRecommend"
import Rank from "./Rank"
import NewAlbum from "./NewAlbum"

import "./style.scss"

function Recommend(props) {
	//请求数据将数据提交到redux
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getBannersAction())
	}, [dispatch])

	return (
		<div>
			<TopCarousel />
			<div className=" content wrap-v2">
				<div className="left">
					<HotRecommend />
					<NewAlbum />
					<Rank />
				</div>
				<div className="right"></div>
			</div>
		</div>
	)
}

export default Recommend
