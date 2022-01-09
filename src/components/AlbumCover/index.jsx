import React, { memo } from "react"

import { getSizeImage } from "../../utils/format-utils"
import "./style.scss"

export default memo(function HYAlbumCover(props) {
	// state and props
	const { info } = props
	// console.log(info)
	return (
		<div>
			<div className="album-image">
				<img src={getSizeImage(info.blurPicUrl)} alt="" />
				<a href="/todo" className="cover image_cover">
					{info.name}
				</a>
			</div>
			<div className="album-info">
				<div className="name text-nowrap">{info.name}</div>
				<div className="artist text-nowrap">{info.artist.name}</div>
			</div>
		</div>
	)
})
