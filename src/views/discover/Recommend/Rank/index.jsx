import React, { memo } from "react"
import ThemeHeader from "../../../../components/ThemeHeader"

import "./style.scss"

export default memo(function Rank() {
	return (
		<div>
			<ThemeHeader title={"榜单"} />
		</div>
	)
})
