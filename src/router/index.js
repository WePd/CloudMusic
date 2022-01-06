import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import Discover from "../views/discover"
import Friends from "../views/friends"
import Mine from "../views/mine"
import NewsRadio from "../views/discover/NewsRadio"
import News from "../views/discover/News"
import Rank from "../views/discover/Rank"
import Recommend from "../views/discover/Recommend"
import Singer from "../views/discover/Singer"
import SongList from "../views/discover/SongList"

const routes = [
	{
		path: "/",
		exact: true,
		render: () => <Redirect to="/discover" />
	},
	{
		path: "/discover",
		component: Discover,
		routes: [
			{
				path: "/discover/news",
				component: News
			},
			{
				path: "/discover/newsradio",
				component: NewsRadio
			},
			{
				path: "/discover/rank",
				component: Rank
			},
			{
				path: "/discover/recommend",
				component: Recommend
			},
			{
				path: "/discover/singer",
				component: Singer
			},
			{
				path: "/discover/songlist",
				component: SongList
			}
		]
	},
	{
		path: "/mine",
		component: Mine
	},
	{
		path: "/friends",
		component: Friends
	}
]

export default routes
