import { createContext } from 'react'

export const dataContext = createContext();

const AuthContext = ({ children }) => {
    let serverUrl = import.meta.env.VITE_API_URL;
    let value = {
        serverUrl,
    }
    return (
        <div>
            <dataContext.Provider value={value}>
                {children}
            </dataContext.Provider>
        </div>
    )
}

export default AuthContext
