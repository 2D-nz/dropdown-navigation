import styled from "styled-components";

export const NavContainerMobile = styled.div`
	@media (min-width: 1000px) {
		display: none;
	}

	display: flex;
	padding: 1.5rem;
	justify-content: space-between;

	.hamburguer_menu {
		height: 10%;
		@media (min-width: 1000px) {
			display: none;
		}
	}
`;

export const NavContainerDesktop = styled.div`
	display: flex;
	padding-left: 1rem;
	padding-top: 0.5rem;
	justify-content: space-between;
	@media (max-width: 1000px) {
		display: none;
	}

	div {
		font-size: 10px;
		display: flex;
		align-items: center;
		margin-right: 2rem;
	}

	div p {
		cursor: pointer;
	}
`;
export const Navbar = styled.ul`
	display: flex;
	align-items: center;
`;

export const Navlink = styled.li`
	display: flex;
	margin: 0.5rem;
	font-size: 10px;
	align-items: center;
	cursor: pointer;
	justify-content: space-between;
	img {
		height: 10%;
	}

	img#arrow_up {
		display: none;
	}
	#logo {
		width: 75%;
	}
	p {
		color: hsl(0, 0%, 41%);
		padding-right: 0.5rem;
		transition: ease-in 0.25s;

		:hover {
			color: hsl(0, 0%, 8%);
		}
	}
	:hover {
		#arrow_up {
			display: block;
		}
		#arrow_down {
			display: none;
		}
	}
	:has(div):hover div {
		visibility: visible;
	}
`;

export const Button = styled.button`
	border-radius: 1.1rem;
	font-size: 10px;
	margin-left: 1rem;
	border: none;
	cursor: pointer;
	padding: 0.8rem 1.5rem;
	outline: none;
	transition: ease-in 0.25s;
	background-color: hsl(0, 0%, 98%);
	color: hsl(0, 0%, 8%);
	outline: 1px solid hsl(0, 0%, 8%);

	@media (max-width: 1000px) {
		width: 100%;
		padding: 0.8rem 4rem;
		margin: 0px;
	}
`;

export const Dropdown = styled.div`
	position: absolute;
	margin-top: 10rem;
	left: 5rem;
	padding-right: 2rem;
	background-color: white;
	border-radius: 10px;
	display: grid;
	visibility: hidden;
	grid-auto-flow: column;
	-webkit-box-shadow: 9px 8px 22px 7px rgba(230, 230, 230, 1);
	-moz-box-shadow: 9px 8px 22px 7px rgba(230, 230, 230, 1);
	box-shadow: 9px 8px 22px 7px rgba(230, 230, 230, 1);
	ul {
		padding: 0;
		margin: 0;
		list-style-type: none;
	}

	@media (max-width: 1000px) {
		position: static;
	}
`;

export const DropdownItem = styled.li`
	background: url(${(props) => props.icon}) no-repeat left top;
	height: 100%;
	padding-top: 7px;
	padding-left: 25px;
	margin: 10px 20px;

	@media (max-width: 1000px) {
		margin: 20px;
		padding-top: 2px;
	}
`;

export const Dropdown2 = styled(Dropdown)`
	margin-top: 8rem;
	left: 13rem;
	align-items: center;

	@media (max-width: 1000px) {
		margin-top: 0;
		left: 0;
	}
`;

export const DropdownItem2 = styled(DropdownItem)`
	padding: 5px 10px;
	margin: 0.5rem;
`;

export const SideNavContainer = styled.div`
	height: 100%;
	width: ${(props) => (props.open ? "60vw" : "0vw")};
	position: fixed;
	z-index: 1;
	top: 0;
	right: 0;
	background-color: hsl(0, 0%, 98%);
	overflow-x: hidden;
	transition: 0.5s;
	padding-top: 60px;

	img#icon_close {
		position: absolute;
		right: 1rem;
		top: 1rem;
	}
`;
export const LoginRegisterContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 20px;
	text-align: center;

	a {
		margin: 20px;
	}
`;

export const MobileDropdownItem = styled.li`
	margin-left: 15px;
	margin-bottom: 30px;
	.visible {
		display: block;
	}
	.invisible {
		display: none;
	}
	span {
		display: flex;
		align-items: center;
	}
	img {
		margin-left: 10px;
	}
`;

export const SideNav = styled.ul`
	padding: 0;
	margin: 0;
	list-style-type: none;
`;

export const FeaturesUl = styled.ul`
	padding: 0;
	margin: 0;
	list-style-type: none;
	display: ${(props) => (props.display ? "block" : "none")};
`;

export const Overlay = styled.div`
	background-color: rgba(0, 0, 0, 0.4);
	height: 100vh;

	display: ${(props) => (props.display ? "block" : "none")};
	position: absolute;
	width: 100vw;
`;
