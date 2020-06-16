import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'

const ExpenceIncome = () => {
  const {state} = useContext(GlobalContext)
  
  let expence = state.reduce((total, arr) => {
    return(arr.amount < 0 ? total + Number(Math.abs(arr.amount)): total+0)
  },0).toFixed(2)

  let income = state.reduce((total, arr) => {
    return(arr.amount > 0 ? total + Number(arr.amount): total+0)
  },0).toFixed(2)
  

  return (
    <div >
      <table  className="income">
      <thead >
        <tr >
        <th className="th1">Income
            <br />
            <b>
            $ {income}
            </b>
        </th>

        <th className="th2">Expence
            <br />
            <b>
              $ {expence}
            </b>
        </th>
        </tr>
      </thead>
      </table>
    </div>
  )
}

export default ExpenceIncome
