import { CHANGE_BANNERS, CHANGE_HOTRECOMMEND, CHANGE_NEWABLBUM, CHANGE_UP_RANKING, CHANGE_NEW_RANKING, CHANGE_ORIGIN_RANKING } from "./constant"
import { getBanners, getHotRecommends, getNewAlbums, getTopList } from "../../services/recommend"

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
			// console.log(res)
			dispatch(getAblums(res))
		})
	}
}
export const getTopUpListAction = res => ({ type: CHANGE_UP_RANKING, upRank: res.playlist })
export const getTopNewListAction = res => ({ type: CHANGE_NEW_RANKING, newRank: res.playlist })
export const getTopOrignListAction = res => ({ type: CHANGE_ORIGIN_RANKING, originRank: res.playlist })

export const getTopListAction = idx => {
	return dispatch => {
		getTopList(idx).then(res => {
			console.log(res)
			switch (idx) {
				case 0:
					dispatch(getTopUpListAction(res))
					break
				case 2:
					dispatch(getTopNewListAction(res))
					break
				case 3:
					dispatch(getTopOrignListAction(res))
					break
				default:
			}
		})
	}
}
