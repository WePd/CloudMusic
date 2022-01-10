import { CHANGE_BANNERS, CHANGE_HOTRECOMMEND, CHANGE_NEWABLBUM, CHANGE_UP_RANKING, CHANGE_NEW_RANKING, CHANGE_ORIGIN_RANKING } from "./constant"
import { Map } from "immutable"

const defaultState = Map({
	banners: [],
	hotRecommend: [],
	newAblum: [],

	upRanking: {},
	newRanking: {},
	originRanking: {}
})

function reducer(state = defaultState, action) {
	switch (action.type) {
		case CHANGE_BANNERS:
			return state.set("banners", action.banners)
		case CHANGE_HOTRECOMMEND:
			return state.set("hotRecommend", action.hotRecommend)
		case CHANGE_NEWABLBUM:
			return state.set("newAblum", action.newAblum)
		case CHANGE_UP_RANKING:
			return state.set("upRanking", action.upRank)
		case CHANGE_NEW_RANKING:
			return state.set("newRanking", action.newRank)
		case CHANGE_ORIGIN_RANKING:
			return state.set("originRanking", action.originRank)
		default:
			return state
	}
}

export default reducer
