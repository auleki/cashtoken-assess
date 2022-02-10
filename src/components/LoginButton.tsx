import { useAuth0 } from "@auth0/auth0-react";
import Button from "../components/Button"

const LoginButton = ({ text} : { text: string }) => {
		const { loginWithRedirect } = useAuth0()

		return (
				<Button onClick={() => loginWithRedirect()}>
						{text}
				</Button>
		)
}

export default LoginButton