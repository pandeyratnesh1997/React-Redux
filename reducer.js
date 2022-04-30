import { INCREMENT,DECREMENT, GET_TODOS,DELETE_TODO, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_ERROR } from "./actionType";

export const reducer = (state,action)=>{
    switch(action.type){
        case INCREMENT :{
            return {
                ...state, count : state.count + action.payload  // here count++ is will not work . 
            }
        }
        case DECREMENT :{
            return {
                ...state, count : state.count - action.payload,
            }
        }
        case GET_TODOS_REQUEST : {
            return {
                ...state, 
                todos : {
                    isLoading : true,
                    isError : false,
                    data    : [],
                }
            }
        }

        case GET_TODOS_SUCCESS : {
            return {
                ...state, 
                todos : {
                    isLoading : false,
                    isError : false,
                    data    : action.payload,
                }
            }
        }

        case GET_TODOS_ERROR : {
            return {
                ...state, 
                todos : {
                    isLoading : false,
                    isError : true,
                    data    : [],
                }
            }
        }
// todos : {state.todos.data.filter((todo) => todo.id !=action.payload),

        case DELETE_TODO : {
            return {
                ...state, 
                todos : {
                    
                    data    : state.todos.data.filter((todo) => todo.id !=action.payload),
                }
            }
        }

        default : {
            return state;
        }
    }
}