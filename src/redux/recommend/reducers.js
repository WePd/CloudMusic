import { CHANGE_BANNERS } from "./constant"

const defaultState = {
	banners: []
}

function reducer(state = defaultState, action) {
	switch (action.type) {
		case CHANGE_BANNERS:
			return { ...state, banners: [] }
		default:
			return state
	}
}

export default reducer
