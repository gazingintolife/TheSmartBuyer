import React from "react";
import "./Footer.scss";
import Heart from "../../assets/Michael's Heart.svg";
import Google from "../../assets/Google.svg";
import Linkedin from "../../assets/LinkedIN.svg";
import Facebook from "../../assets/fb.svg";
import Twitter from "../../assets/Twitter.svg";
import Instagram from "../../assets/Instagram.svg";

const Footer = () => (
	<footer className="footer-container">
		<div className="footer-left">
			+1 647-549-1055 731 <br /> Constellation Drive Mississauga ON <br />{" "}
			L5R2V7
		</div>
		<div className="footer-middle">
			Made with <img className="heart" src={Heart} alt="" /> in Toronto
		</div>
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
