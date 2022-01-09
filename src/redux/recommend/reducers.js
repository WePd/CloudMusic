import { CHANGE_BANNERS, CHANGE_HOTRECOMMEND } from "./constant"
import { Map } from "immutable"

const defaultState = Map({
	banners: [],
	hotRecommend: []
})

function reducer(state = defaultState, action) {
	switch (action.type) {
		case CHANGE_BANNERS:
			return state.set("banners", action.banners)
		case CHANGE_HOTRECOMMEND:
			return state.set("hotRecommend", action.hotRecommend)
		default:
			return state
	}
}

export default reducer
