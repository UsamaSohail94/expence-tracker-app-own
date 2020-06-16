import React,{useReducer} from 'react'

export const GlobalContext = React.createContext()

const InitialState = []

const reducer =(state,action)=>{
switch(action.type) {
case "display": 
    return [...state, action.values.val]
case "remove":
    return (
        state = state.filter((item, index)=> index !== action.value)
        )
default:
    return state
}
}


export const GlobalProvider = ({children})=> {

    const [state, dispatch] = useReducer(reducer, InitialState)

    return(
        <GlobalContext.Provider value={{state: state, dispatch: dispatch}}>
            {children}
        </GlobalContext.Provider>

    )
}