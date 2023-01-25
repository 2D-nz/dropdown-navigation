import styled from "styled-components";

export const HeadlineContainerStyles = styled.div`
	@media (min-width: 1000px) {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: 1.5fr 1fr;
		margin: 4rem;
		align-items: center;
		column-gap: 2rem;

		img {
			width: 100%;
			height: 100%;
		}
	}

	#image_mobile {
		width: 100%;

		@media (min-width: 1000px) {
			display: none;
		}
	}
	#image_desktop {
		display: none;

		@media (min-width: 1000px) {
			display: block;
		}
	}
`;

export const Headline = styled.div`
	padding: 1rem;
	text-align: center;
	@media (min-width: 1000px) {
		text-align: left;
		padding-left: 2rem;
	}
`;

export const Title = styled.h1`
	font-weight: 700;
	@media (min-width: 1000px) {
		font-size: 60px;
		padding-right: 4rem;
	}
`;

export const Text = styled.p`
	@media (min-width: 1000px) {
		padding-right: 4rem;
		margin: 2rem 0px;
	}
`;

export const Button = styled.button`
	background-color: hsl(0, 0%, 8%);
	color: hsl(0, 0%, 98%);
	border-radius: 1.1rem;
	border: none;
	margin: 1rem;
	padding: 1rem 2rem;
	outline: none;
	transition: ease-in 0.25s;
	cursor: pointer;
	@media (min-width: 1000px) {
		margin: 2rem 0px;

		:hover {
			background-color: hsl(0, 0%, 98%);
			color: hsl(0, 0%, 8%);
			outline: 1px solid hsl(0, 0%, 8%);
		}
	}
`;

export const Footer = styled.footer`
	display: flex;
	margin: 2rem 0rem;
	align-items: center;
	justify-content: space-evenly;
	@media (min-width: 1000px) {
		margin-top: 2rem;
		margin-bottom: 0px;
	}

	img {
		width: 20%;
		height: 20%;
	}

	img#audiophile {
		width: 15%;
		height: 15%;
	}
`;
