import { CHANGE_BANNERS, CHANGE_HOTRECOMMEND, CHANGE_NEWABLBUM } from "./constant"
import { Map } from "immutable"

const defaultState = Map({
	banners: [],
	hotRecommend: [],
	newAblum: []
})

function reducer(state = defaultState, action) {
	switch (action.type) {
		case CHANGE_BANNERS:
			return state.set("banners", action.banners)
		case CHANGE_HOTRECOMMEND:
			return state.set("hotRecommend", action.hotRecommend)
		case CHANGE_NEWABLBUM:
			return state.set("newAblum", action.newAblum)
		default:
			return state
	}
}

export default reducer
