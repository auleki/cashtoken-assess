import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Button from "../components/Button";

const Profile = () => {
		const navigate = useNavigate()
		const logout = async () => {
				const { status } = await axios.post('https://id-sandbox.cashtoken.africa/account/signout')
				if (status === 200) {
						navigate("/", { replace: true })
				}
		}
		return (
				<div>
						<h1>Profile</h1>
						<Button onClick={logout}>Logout</Button>
				</div>
		)
}

export default Profile