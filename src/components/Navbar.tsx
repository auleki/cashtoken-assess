import LoginButton from "./LoginButton";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContextProvider";


const Navbar = () => {
		const context = useContext(AuthContext);
		console.log(context)
		return (
				<nav style={{ display: "flex", justifyContent: "space-between" }}>
						<div>
								<h1>Logo</h1>
						</div>
						{context?.userAuthenticated? "John Doe" : <LoginButton text="Login"/>}
				</nav>
		)
}

export default Navbar
