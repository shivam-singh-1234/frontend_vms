import axios from "axios";

export const getUser=()=>async(dispatch)=>{
    try{
        dispatch({type:"GET_USER_LOADING"})
        const data=await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch({type:"GET_USER_LOADED",payload:data.data})
    }
    catch(error){
        dispatch({type:"GET_USER_ERROR"})
    }
}















// export function getUser(){
//         return async function(dispatch){
//                 dispatch({type:"GET_USER_LOADING"})
//                 const data=await axios.get("https://jsonplaceholder.typicode.com/todos");
//                 dispatch({type:"GET_USER_LOADED",payload:data.data})
//         }
// }