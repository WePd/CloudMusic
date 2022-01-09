import React, { memo, useEffect, useRef } from "react"
import { useDispatch, useSelector, shallowEqual } from "react-redux"

import ThemeHeader from "../../../../components/ThemeHeader"
import AlbumCover from "../../../../components/AlbumCover"

import { getNewAlbumsAction } from "../../../../redux/recommend/action"

import { Carousel } from "antd"
import "./style.scss"

export default memo(function NewAlbum() {
	const dispatch = useDispatch()
	const swip = useRef()
	// console.log(swip)
	const { albums } = useSelector(state => ({ albums: state.getIn(["recommend", "newAblum"]) }), shallowEqual)
	// console.log(albums)

	useEffect(() => {
		dispatch(getNewAlbumsAction(10))
	}, [dispatch])

	return (
		<div className="albumItem">
			<ThemeHeader title={"新碟上架"} />
			<div className="content">
				<button onClick={e => swip.current.prev()} className="arrow arrow-left sprite_02"></button>
				<div className="album">
					<Carousel dots={false} ref={swip}>
						{[0, 1].map(item => {
							return (
								<div key={item} className="page">
									{albums.slice(item * 4, (item + 1) * 4).map(iten => {
										return <AlbumCover key={iten.id} info={iten} size={100} width={118} bgp="-570px" />
									})}
								</div>
							)
						})}
					</Carousel>
				</div>
				<button onClick={e => swip.current.next()} className="arrow arrow-right sprite_02"></button>
			</div>
		</div>
	)
})
