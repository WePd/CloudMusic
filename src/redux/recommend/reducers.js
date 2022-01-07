import { CHANGE_BANNERS } from "./constant"
import { Map } from "immutable"

const defaultState = Map({
	banners: []
})

function reducer(state = defaultState, action) {
	switch (action.type) {
		case CHANGE_BANNERS:
			return state.set("banners", action.banners)
		default:
			return state
	}
}

export default reducer
