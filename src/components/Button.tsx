import {ReactNode} from "react";

const Button = ({ children, onClick }: { children: ReactNode, onClick: () => void }) => {
		const btnStyles = {
				background: "rebeccapurple",
				padding: "1rem 2rem",
				cursor: "pointer",
				color: "#ffffff",
				border: "none",
				borderRadius: "5px",
				transition: "background 200ms ease-in, box-shadow 200ms ease-out",
				boxShadow: "0 4px 5px rgba(167, 101, 239, .3), 0 2px 5px rgba(167, 101, 239, .5)"
		}
		return (
				<button onClick={onClick} style={btnStyles}>{children}</button>
		)
}
export default Button


