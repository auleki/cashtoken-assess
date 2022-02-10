import { createContext, ReactNode, useState } from "react";

export interface IAuthContext {
		userAuthenticated: boolean
		setUserAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<IAuthContext | null>({} as IAuthContext)

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
		const [userAuthenticated, setUserAuthenticated] = useState<boolean>(false)

		return (
				<AuthContext.Provider value={{userAuthenticated, setUserAuthenticated}}>
						{children}
				</AuthContext.Provider>
		)
}
		export default AuthContextProvider
