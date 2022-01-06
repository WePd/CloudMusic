import React, { useEffect } from "react"
import { Carousel } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { getBannersAction } from "../../../redux/recommend/action"

function Recommend(props) {
	const contentStyle = {
		height: "160px",
		color: "#fff",
		lineHeight: "160px",
		textAlign: "center",
		background: "#364d79"
	}
	const dispatch = useDispatch()
	const banners = useSelector(state => state.recommend.banners)
	console.log(banners)
	useEffect(() => {
		// console.log(props)
		dispatch(getBannersAction())
	}, [dispatch])

	return (
		<Carousel effect="fade">
			<div>
				<h3 style={contentStyle}> </h3>
			</div>
		</Carousel>
	)
}

// const mapStateToProps = state => {
// 	return { banners: state.banners }
// }
// const mapDispatchToProps = dispatch => ({
// 	getBanners: () => dispatch(getBannersAction())
// })
export default Recommend
