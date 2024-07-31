import React, { useState } from 'react'
import { useEffect } from 'react'

const UserContext=React.createContext() //можно сделать {} либо оставить пустым
const {Provider, Consumer}=UserContext
//Provider-поставщик(жеткирип берет данные) Consumer- потребитель(талап кылганды берет)-классовый компонентте колдонулат, функциональныйда азырынча кереки деле жок

const userAdmin={
    // name: 'Admin', 
    // login: 'admin@gmail.com', 
    // pass: 'admin123'
    name:'',
    login:'', 
    pass:''

}


const AppContext = ({children}) => {
    const [user, setUser]=useState(userAdmin)

    //
    const setUser2=(user)=>{
        console.log(user);
        if(user?.rememberMe){
            saveUser(user)
        }
        setUser(user)
        
    }
    //
    const saveUser=(person)=>{
        localStorage.setItem('user',JSON.stringify(person)) //setItem аркылуу сактап алдык маалыматты

    }
    const value={

        user,  //userAdmin ичиндеги данныйлар
        // setUser,
        setUser2
    }
    useEffect(()=>{
        const user=localStorage.getItem('user') // getItem аркылуу алып алдык маалыматты
        setUser(JSON.parse(user))
        console.log('RELOAD page');
    },[])

  return  <Provider value={value}>{children}</Provider>
}
export const useUser=()=>{
    const user=React.useContext(UserContext)
    //user={user, setUser2}
    return user
}

export default AppContext