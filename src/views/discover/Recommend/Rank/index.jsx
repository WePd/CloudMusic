import React, { memo, useEffect } from "react"
import ThemeHeader from "../../../../components/ThemeHeader"

import { useDispatch, useSelector, shallowEqual } from "react-redux"

import { getTopListAction } from "../../../../redux/recommend/action"
import TopRank from "../../../../components/TopRank"

import "./style.scss"

export default memo(function Rank() {
	const dispatch = useDispatch()
	const { upRanking, newRanking, originRanking } = useSelector(
		state => ({
			upRanking: state.getIn(["recommend", "upRanking"]),
			newRanking: state.getIn(["recommend", "newRanking"]),
			originRanking: state.getIn(["recommend", "originRanking"])
		}),
		shallowEqual
	)
	useEffect(() => {
		dispatch(getTopListAction(0))
		dispatch(getTopListAction(2))
		dispatch(getTopListAction(3))
	}, [dispatch])
	return (
		<div className="Ranking">
			<ThemeHeader title={"榜单"} />
			<div className="tops">
				<TopRank info={upRanking} />
				<TopRank info={newRanking} />
				<TopRank info={originRanking} />
			</div>
		</div>
	)
})
