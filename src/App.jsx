/** @format */

import Login from "./login/Login";
import Signup from "./signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Navbar from "./navbar/Navbar";
import Cart from "./cart/Cart";

/** @format */

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						index
						element={<Dashboard />}
					/>
					<Route
						path="Dashboard"
						element={<Dashboard />}
					/>
					<Route
						path="Cart"
						element={<Cart />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
