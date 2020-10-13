import React from "react";
import Logo from './../../assets/graphic/logo.png'

const Header = (props) => {
	return (
		<header data-test="headerComponent">
			<div className="wrap">
				<div className="logo">
				<p>Change Something to test Commit Rules Karmar</p>
					<img data-test="logoIMG" src={Logo} alt="Logo" />
				</div>
			</div>
		</header>	
	);
};

export default Header;
