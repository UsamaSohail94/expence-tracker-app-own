import React,{useContext} from 'react'
import { GlobalContext } from '../GlobalContext'

const HistoryList = () => {
  const {state, dispatch} = useContext(GlobalContext)
  return (
    <div>
      {
        state.map((item, index) => {
          return(
            <div key={index} className="List"> 
              
            <div className="itemName">
              <strong>{item.name}</strong>
            </div>
              
              <div className="itemAmount">
                {`${item.amount < 0 ? '-' : '+'}$${Math.abs(item.amount)}`}
              </div>
              
              <button 
                onClick={() => dispatch({type:"remove", value:index})}
              >
                <span >&times;</span>
              </button>
            
              </div>
          )
        })
      }
    </div>
  )
}

export default HistoryList
