import styled from "styled-components"

export const HeaderWrapper = styled.div`
	height: 75px;
	background: #242424;

	.headerItem {
		height: 70px;
		display: flex;
		justify-content: space-between;
	}
	.divder {
		height: 5px;
		background: #c20c2c;
	}
`

export const HeaderLeft = styled.div`
	display: flex;
	.logo {
		width: 157px;
		height: 69px;
		text-indent: -9999px;
		background-position: 0 0;
	}
	.select-list {
		display: flex;
		line-height: 70px;

		.select-item {
			position: relative;

			a {
				display: block;
				padding: 0 20px !important;
				color: #ccc;
			}

			:last-of-type a {
				position: relative;
				::after {
					position: absolute;
					content: "";
					width: 28px;
					height: 19px;
					background-image: url(${require("../../assets/img/sprite_01.png").default});
					background-position: -190px 0;
					top: 20px;
					right: -15px;
				}
			}

			&:hover a,
			a.active {
				color: #fff;
				background: #000;
				text-decoration: none;
			}

			.active .icon {
				position: absolute;
				display: inline-block;
				width: 12px;
				height: 7px;
				bottom: -1px;
				left: 50%;
				transform: translate(-50%, 0);
				background-position: -226px 0;
			}
		}
	}
`
export const HeaderRight = styled.div`
	display: flex;
	align-items: center;
	color: #ccc;
	font-size: 12px;

	.search {
		width: 170px;
		height: 32px;
		border-radius: 16px;
	}
	.center {
		height: 32px;
		text-align: center;
		border: 1px solid #666;
		border-radius: 16px;
		margin: 0 16px;
		color: #ccc;
		background-color: transparent;
	}
`
