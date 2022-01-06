import { CHANGE_BANNERS } from "./constant"
import { getBanners } from "../../services/recommend"

const changeBanner = res => ({ type: CHANGE_BANNERS, banners: res.banners })

export const getBannersAction = () => {
	return dispatch => {
		getBanners().then(res => {
			console.log(res)
			dispatch(changeBanner(res))
		})
	}
}
