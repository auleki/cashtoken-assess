import LoginButton from "./LoginButton";
import { useMatch } from "react-router-dom";


const Navbar = () => {
		const match = useMatch("/callback/")
		console.log("MATCH? ", match)
		return (
				<nav style={{ display: "flex", justifyContent: "space-between" }}>
						<div>
								<h1>Logo</h1>
						</div>
						<LoginButton text="Login"/>
						{/*{match.pattern.pathNameBase === "/callback" "John Doe" : <LoginButton text="Login"/>}*/}

				</nav>
		)
}

export default Navbar
