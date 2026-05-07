import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
import { dataContext } from './AuthContext';
import axios from 'axios';
import { useEffect } from 'react';

export const userDataContext = createContext();

const UserContext = ({children}) => {
    let [userData, setUserData] = useState("")
    let {serverUrl} = useContext(dataContext);
    
    const getCurrentUser = async () => {
        console.log(serverUrl);
        
        try {
            let result = await axios.post(serverUrl+'/user/getcurrentuser',{},{withCredentials:true})
            setUserData(result.data);
        } catch (error) {
            setUserData(null)
        }
    }

    let value = {
        userData,setUserData,getCurrentUser
    }

    useEffect(()=>{
        getCurrentUser()
    },[])
  return (
    <div>
        <userDataContext.Provider value={value}>
            {children}
        </userDataContext.Provider>
    </div>
  )
}

export default UserContext
