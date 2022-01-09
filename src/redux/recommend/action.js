import { CHANGE_BANNERS, CHANGE_HOTRECOMMEND, CHANGE_NEWABLBUM } from "./constant"
import { getBanners, getHotRecommends, getNewAlbums } from "../../services/recommend"

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

const getAblums = res => ({ type: CHANGE_NEWABLBUM, newAblum: res.albums })

export const getNewAlbumsAction = limit => {
	return dispatch => {
		getNewAlbums(limit).then(res => {
			console.log(res)
			dispatch(getAblums(res))
		})
	}
}
