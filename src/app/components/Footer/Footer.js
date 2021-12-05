import React from "react";
import "./Footer.scss";
import Google from "../../assets/Google.svg";
import Linkedin from "../../assets/LinkedIN.svg";
import Facebook from "../../assets/fb.svg";
import Twitter from "../../assets/Twitter.svg";
import Instagram from "../../assets/Instagram.svg";

const Footer = () => (
	<footer className="footer-container">
		<div className="social-container">
			<img src={Google} alt="" />
			<img src={Linkedin} alt="" />
			<img src={Facebook} alt="" />
			<img src={Twitter} alt="" />
			<img src={Instagram} alt="" />
		</div>
	</footer>
);

export default Footer;
