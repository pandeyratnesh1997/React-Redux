import { INCREMENT,DECREMENT, GET_TODOS , DELETE_TODO, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_ERROR} from "./actionType";
import axios from "axios";

export const incrementCount = (payload)=>{
    return{
        type : INCREMENT,
        payload : payload,
    }
}
export const decrementCount = (payload)=>{
    return{
        type : DECREMENT,
        payload,
    }
}
export const getTodos = async (dispatch)=>{

    dispatch({
        type : GET_TODOS_REQUEST,
        
        
    })

    try {
        let res = await axios.get("http://localhost:8080/todos");
    let data = res.data;
    dispatch({
        type : GET_TODOS_SUCCESS,
        payload : data,
    })
   

        
    } catch (error) {
        dispatch({
            type : GET_TODOS_ERROR,
          
        })
    }
    

    

}

export const deleteTodos = async (dispatch,id)=>{
    let res = await axios.delete(`http://localhost:8080/todos/${id}`);
   let data = res.data;

    dispatch({
        type : DELETE_TODO,
        payload : id,
    })

}