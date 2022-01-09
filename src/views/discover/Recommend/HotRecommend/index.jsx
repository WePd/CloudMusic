import React, { memo, useEffect } from "react"
import { useDispatch, useSelector, shallowEqual } from "react-redux"

import { getHotRecommendAction } from "../../../../redux/recommend/action"
import { HOT_RECOMMEND_LIMIT } from "../../../../common/constants"
import SongsCover from "../../../../components/SongsCover"

import "./style.scss"

export default memo(function HotRecommend() {
	const dispatch = useDispatch()

	const { recommends } = useSelector(
		state => ({
			recommends: state.getIn(["recommend", "hotRecommend"])
		}),
		shallowEqual
	)
	// console.log(recommends)
	useEffect(() => {
		dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
	}, [dispatch])
	return (
		<div className="recommend-list">
			{recommends.map((item, index) => {
				return <SongsCover songs={item} key={item.id} />
			})}
		</div>
	)
})
