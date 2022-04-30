import React, { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Todo } from './Todo';
import Todo_input from './Todo_input';
import { getTodos } from '../store/action';

export const Todos = () => {
    // const [todos,setTodos] = useState([]);;
 const {isLoading, isError, data} =   useSelector((state)=>state.todos);
 const dispatch = useDispatch();


    useEffect( ()=>{
        // fetch("http://localhost:8080/todos").then(res => res.json()).then(data => setTodos(data));
        getTodos(dispatch);

    },[])
    if(isLoading){
      return (<div>Loading...</div>)
    }
    if(isError){
      return ( <div>Error Occurred while loading ....</div>)
    }
    
  return (
    <div>
         <h1>Todos: {data.length} </h1>
        
         <Todo_input/>
        {data.map((todo)=>(
            <Todo key={todo.id} {...todo}/>))}

    </div>
   

  )
}
