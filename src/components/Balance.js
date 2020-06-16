import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'

const Balance = () => {
  const {state} = useContext(GlobalContext)
  
  const balance = state.reduce((total, arr) => {
    return (
      total + Number(arr.amount)
    )
  },0).toFixed(2)
  
  return (
    <div>
    <h3>Your Balance is</h3>
    <h1> $ {balance}
    </h1>
    </div>
  )
}

export default Balance
