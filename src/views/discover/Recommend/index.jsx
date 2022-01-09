import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getBannersAction } from "../../../redux/recommend/action"

import TopCarousel from "./TopCarousel"
import HotRecommend from "./HotRecommend"

function Recommend(props) {
	//请求数据将数据提交到redux
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getBannersAction())
	}, [dispatch])

	return (
		<div>
			<TopCarousel />
			<HotRecommend />
		</div>
	)
}

export default Recommend
