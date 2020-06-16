import React, {useContext, useState} from 'react'
import { GlobalContext } from '../GlobalContext'

const AddTransactoins = () => {

  const {dispatch} = useContext(GlobalContext)
  const [val, setVal] = useState({name:'', amount:''})

  const handleChange = (e)=> {
    setVal({
      ...val, [e.target.name]:e.target.value
    })
  }

  
  const handleSubmit = (e)=> {
    e.preventDefault()
    dispatch({type:"display" , values:{val} })
    setVal({name:"", amount:""})
  }

  return (
    <div className="heading">
      <h2>Add Amount</h2>
      <hr />
      <form onSubmit={handleSubmit}>
      <div>
        <p><b>Text</b></p>
        <input type="text" name='name' value={val.name} onChange={handleChange} placeholder="Enter text" />
      </div>

      <div>
        <p><b>Amount</b></p>
        <small>Note: enter (+) no for income & (-) for expence</small>
        <input type="text" name='amount' value={val.amount} onChange={handleChange} placeholder="0.00" />
      </div>
      <button type="submit" className="button1">Add</button>
      </form>
      
    </div>
  )
}

export default AddTransactoins
