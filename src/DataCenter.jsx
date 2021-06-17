import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"


export const contex=createContext()

export default function DataCenter(props) {

    const [users,setusers]=useState([])


    useEffect(() => {
        axios.get('https://api.github.com/users?since=XXX')
        .then((res)=>setusers(res.data))
      }, []);
      
      
      function supprime (id) {
          const result = users.filter(user=>user.id!==id)
          setusers(result)
      }

    return (
        <div>
            <contex.Provider value={{ users,supprime}}>
                {props.children}
            </contex.Provider>
        </div>
    )
}

// ecrire 2 varibale dans le DATACENTER.JSX
// ecrire 2 component Message2.jsx et Messag3.jsx
// chaque component vas recevoir les donner

// ecrire Users.jsx et User.jsx
// ecrire state dans le DATACENTER.jsx
// remplire le state avec api externe
// passer le state dans value={{}}
// le component Users.jsx va recevoir le state
