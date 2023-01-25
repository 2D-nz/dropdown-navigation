import React from "react";
import image_mobile from "../assets/images/image-hero-mobile.png";
import image_desktop from "../assets/images/image-hero-desktop.png";
import logo_databiz from "../assets/images/client-databiz.svg";
import logo_audiophile from "../assets/images/client-audiophile.svg";
import logo_meet from "../assets/images/client-meet.svg";
import logo_maker from "../assets/images/client-maker.svg";
import {
	HeadlineContainerStyles,
	Headline,
	Title,
	Text,
	Button,
	Footer,
} from "./HeadlineContainer.styles";

function HeadlineContainer() {
	return (
		<HeadlineContainerStyles>
			<img src={image_mobile} id="image_mobile" alt="Man holding a laptop" />

			<Headline>
				<Title>Make remote work</Title>
				<Text>
					{" "}
					Get your team in sync, no matter your location. Streamline processes,
					create team reituals, and watch productivity soar.
				</Text>
				<Button>Learn more</Button>
				<Footer>
					<img src={logo_databiz} alt="logo databiz" />
					<img src={logo_audiophile} id="audiophile" alt="logo audiophile" />
					<img src={logo_meet} alt="logo meet" />
					<img src={logo_maker} alt="logo maker" />
				</Footer>
			</Headline>
			<img src={image_desktop} id="image_desktop" alt="Man holding a laptop" />
		</HeadlineContainerStyles>
	);
}

export default HeadlineContainer;
