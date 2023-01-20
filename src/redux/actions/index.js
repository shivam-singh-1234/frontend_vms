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

export const getVoucher=()=>async(dispatch)=>{
    try{
        dispatch({type:"GET_VOUCHER_LOADING"})
        const data=await axios.get("/voucher/get-voucher");
        dispatch({type:"GET_VOUCHER_LOADED",payload:data.data.data})
    }
    catch(error){
        dispatch({type:"GET_VOUCHER_ERROR"})
    }
}

export const postVoucher=(body)=>async(dispatch)=>{
    try{
        dispatch({type:"POST_VOUCHER_LOADING"})
        const data=await axios.post("/voucher/create-voucher",body);
        dispatch({type:"POST_VOUCHER_LOADED",payload:data.data.data})
    }
    catch(error){
        dispatch({type:"POST_VOUCHER_ERROR"})
    }
}

export const editVoucher=(body)=>async(dispatch)=>{
    try{
        dispatch({type:"EDIT_VOUCHER_LOADING"})
        const data=await axios.patch(`/voucher/update-voucher/${1}`,body);
        dispatch({type:"EDIt_VOUCHER_LOADED",payload:data.data.data})
    }
    catch(error){
        dispatch({type:"EDIT_VOUCHER_ERROR"})
    }
}














// export function getUser(){
//         return async function(dispatch){
//                 dispatch({type:"GET_USER_LOADING"})
//                 const data=await axios.get("https://jsonplaceholder.typicode.com/todos");
//                 dispatch({type:"GET_USER_LOADED",payload:data.data})
//         }
// }