import React, { memo, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ThemeHeader from "../../../../components/ThemeHeader"
import { getNewAlbumsAction } from "../../../../redux/recommend/action"

import "./style.scss"

export default memo(function NewAlbum() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getNewAlbumsAction(10))
	})

	return (
		<div>
			<ThemeHeader title={"新碟上架"} />
		</div>
	)
})
