/** @format */

import React from "react";
import "../navbar/Navbar.css";
import { Outlet, Link, useNavigate, Navigate } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<div className="navbar">
				<button className="logo-right">
					<Link
						to="/Dashboard"
						style={{ textDecoration: "none", color: "black" }}>
						Food Restaurant
					</Link>
				</button>

				<Link to="/Cart">
					<button className="cart-left">cart</button>
				</Link>
			</div>
			<Outlet />
		</div>
	);
};

export default Navbar;
