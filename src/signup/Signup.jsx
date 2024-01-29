/** @format */

import React from "react";

const Signup = () => {
	return (
		<div>
			<div className="title-signup">Signup</div>
			<div className="signup-form">
				<form action="">
					<div className="name">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							id="name"
						/>
					</div>
					<div className="email">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
						/>
					</div>
					<div className="password">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
