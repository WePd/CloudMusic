import React, { memo, useEffect } from "react"
import ThemeHeader from "../../../../components/ThemeHeader"

import { useDispatch } from "react-redux"

import { getTopListAction } from "../../../../redux/recommend/action"

import "./style.scss"

export default memo(function Rank() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getTopListAction(0))
		dispatch(getTopListAction(2))
		dispatch(getTopListAction(3))
	})
	return (
		<div>
			<ThemeHeader title={"榜单"} />
		</div>
	)
})
