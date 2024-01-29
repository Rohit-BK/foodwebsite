/** @format */
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../dashboard/Dashboard.css";
// import Navbar from "../navbar/Navbar";

const Dashboard = () => {
	const [foods, setFoods] = useState([]);

	useEffect(() => {
		// Fetch the list of foods from the API
		axios
			.get("https://www.themealdb.com/api/json/v1/1/categories.php")
			.then((response) => {
				setFoods(response.data.categories);
				console.log(response.data.categories);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			{/* <Navbar /> */}
			<div className="menu">
				{foods.map((food) => (
					<div
						className="comp"
						key={food.id}>
						<div className="pic">
							<img
								src={food.strCategoryThumb}
								alt={food.name}
							/>
						</div>
						<div className="name">
							<p>{food.strCategory}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
