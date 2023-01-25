import React, { useState } from "react";
import {
	Navbar,
	NavContainerMobile,
	NavContainerDesktop,
	Navlink,
	SideNav,
	MobileDropdownItem,
	Button,
	Dropdown,
	Dropdown2,
	DropdownItem,
	DropdownItem2,
	Overlay,
	SideNavContainer,
	FeaturesUl,
	LoginRegisterContainer,
} from "./Nav.styles";

import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg";

import arrow_down from "../assets/images/icon-arrow-down.svg";
import arrow_up from "../assets/images/icon-arrow-up.svg";
import icon_calendar from "../assets/images/icon-calendar.svg";
import icon_planning from "../assets/images/icon-planning.svg";
import icon_todo from "../assets/images/icon-todo.svg";
import icon_reminders from "../assets/images/icon-reminders.svg";
import icon_close from "../assets/images/icon-close-menu.svg";

function Nav() {
	const [sideNavOpen, toggleSideNav] = useState(false);
	const [FeaturesDisplay, setFeaturesDisplay] = useState(false);
	const HandleFeatures = () => {
		setFeaturesDisplay(!FeaturesDisplay);
	};

	const [CompanyDisplay, setCompanyDisplay] = useState(false);
	const HandleCompanyDisplay = () => {
		setCompanyDisplay(!CompanyDisplay);
	};

	return (
		<div>
			<Overlay display={sideNavOpen}></Overlay>

			<NavContainerMobile>
				<img src={logo} alt="snap logo" />
				<img
					onClick={() => toggleSideNav(true)}
					src={menuIcon}
					className="hamburguer_menu"
					alt="three stacked lines menu icon"
				/>

				<SideNavContainer open={sideNavOpen}>
					<img
						id="icon_close"
						src={icon_close}
						onClick={() => toggleSideNav(false)}
						alt="X shaped icon to close menu"
					/>
					<SideNav>
						<MobileDropdownItem onClick={HandleFeatures}>
							<span>
								{" "}
								Freatures
								<img
									src={arrow_down}
									alt="arrow down"
									id="arrow_down"
									className={FeaturesDisplay ? "visible" : "invisible"}
								/>
								<img
									id="arrow_up"
									src={arrow_up}
									className={FeaturesDisplay ? "invisible" : "visible"}
								/>
							</span>
							<FeaturesUl display={!FeaturesDisplay}>
								<DropdownItem icon={icon_todo}>TodoList</DropdownItem>
								<DropdownItem icon={icon_calendar}>Calendar</DropdownItem>
								<DropdownItem icon={icon_reminders}>Reminders</DropdownItem>
								<DropdownItem icon={icon_planning}>Planning</DropdownItem>
							</FeaturesUl>
						</MobileDropdownItem>
						<MobileDropdownItem onClick={HandleCompanyDisplay}>
							<span>
								{" "}
								Company
								<img
									src={arrow_down}
									alt="arrow down"
									id="arrow_down"
									className={CompanyDisplay ? "visible" : "invisible"}
								/>
								<img
									id="arrow_up"
									src={arrow_up}
									className={CompanyDisplay ? "invisible" : "visible"}
								/>
							</span>
							<FeaturesUl display={!CompanyDisplay}>
								<DropdownItem>History</DropdownItem>
								<DropdownItem>Our Team</DropdownItem>
								<DropdownItem>Blog</DropdownItem>
							</FeaturesUl>
						</MobileDropdownItem>
						<MobileDropdownItem>Carrers</MobileDropdownItem>
						<MobileDropdownItem>About</MobileDropdownItem>

						<LoginRegisterContainer>
							<a>Login</a>
							<Button>Register</Button>
						</LoginRegisterContainer>
					</SideNav>
				</SideNavContainer>
			</NavContainerMobile>
			<NavContainerDesktop>
				<Navbar>
					<Navlink>
						<img id="logo" src={logo} alt="logo" />
					</Navlink>
					<Navlink>
						<p> Features </p>
						<img src={arrow_down} alt="arrow down" id="arrow_down" />
						<img id="arrow_up" src={arrow_up} />
						<Dropdown>
							<ul>
								<DropdownItem icon={icon_todo}>TodoList</DropdownItem>
								<DropdownItem icon={icon_calendar}>Calendar</DropdownItem>
								<DropdownItem icon={icon_reminders}>Reminders</DropdownItem>
								<DropdownItem icon={icon_planning}>Planning</DropdownItem>
							</ul>
						</Dropdown>
					</Navlink>
					<Navlink>
						<p>Companies</p>
						<img src={arrow_down} alt="arrow down" id="arrow_down" />
						<img id="arrow_up" src={arrow_up} />
						<Dropdown2>
							<ul>
								<DropdownItem2>History</DropdownItem2>
								<DropdownItem2>Our Team</DropdownItem2>
								<DropdownItem2>Blog</DropdownItem2>
							</ul>
						</Dropdown2>
					</Navlink>

					<Navlink>
						<p>Carreers</p>
					</Navlink>
					<Navlink>
						<p>About</p>
					</Navlink>
				</Navbar>
				<div>
					<p>Login</p>
					<Button> Register </Button>
				</div>
			</NavContainerDesktop>
		</div>
	);
}

export default Nav;
