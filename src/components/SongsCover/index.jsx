import React, { memo } from "react"
import { getCount, getSizeImage } from "../../utils/format-utils"

import "./style.scss"

export default memo(function SongsCover(props) {
	// console.log(props)
	return (
		<div className="songCover">
			<div className="cover-top">
				<img src={getSizeImage(props.songs.picUrl, 140)} alt="" />
				<div className="cover sprite_covor">
					<div className="info sprite_covor">
						<span>
							<i className="sprite_icon erji"></i>
							{getCount(props.songs.playCount)}
						</span>
						<i className="sprite_icon play"></i>
					</div>
				</div>
			</div>
			<div className="cover-bottom text-nowrap">{props.songs.name}</div>
			<div className="cover-source text-nowrap">{props.songs.copywriter}</div>
		</div>
	)
})
