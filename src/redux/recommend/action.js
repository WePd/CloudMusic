import { CHANGE_BANNERS, CHANGE_HOTRECOMMEND } from "./constant"
import { getBanners, getHotRecommends } from "../../services/recommend"

const changeBanner = res => ({ type: CHANGE_BANNERS, banners: res.banners })

export const getBannersAction = () => {
	return dispatch => {
		getBanners().then(res => {
			// console.log(res)
			dispatch(changeBanner(res))
		})
	}
}

const getHotRecommend = res => ({ type: CHANGE_HOTRECOMMEND, hotRecommend: res.result })

export const getHotRecommendAction = limit => {
	return dispatch => {
		getHotRecommends(limit).then(res => {
			// console.log(res)
			dispatch(getHotRecommend(res))
		})
	}
}
