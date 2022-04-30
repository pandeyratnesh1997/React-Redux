import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodos } from '../store/action'

export const Todo = ({id,value}) => {
    const dispatch = useDispatch()
    const handleDelete = async ()=>{
      deleteTodos(dispatch,id)
    }

  return (

    <div style={{dispaly : "flex",justifyContent : "center", marginTop:"10px"}}>
       <div>{value}</div>
        <button onClick={()=>{handleDelete()}}>Delete</button>
    </div>
  )
}
