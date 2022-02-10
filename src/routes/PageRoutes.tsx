﻿import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";


const PageRoutes = () => {
		return (
				<Routes>
						<Route path="/" element={<Home />}/>
						<Route path="/callback" element={<Profile />} />
				</Routes>
		)
}

export default PageRoutes