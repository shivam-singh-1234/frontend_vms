import { GET_USER_LOADING,
        GET_USER_LOADED,
        GET_USER_ERROR} from "../actions/actionType";
        
const initialData = {
    userList: {
        data: [],
        loading: false,
        success: false,
        error: false
    }
}

const crudOperation=(state=initialData,action)=>{
    switch (action.type) {
        case GET_USER_LOADING:
            return{
                ...state,
                userList: {
                    data: [],
                    loading: true,
                    success: false,
                    error: false
                }
            }

        case GET_USER_LOADED:
            return {
                ...state,
                userList: {
                    data: action.payload,
                    loading: false,
                    success: true,
                    error: false
                }
            }

        case GET_USER_ERROR:
                return {
                    ...state,
                    userList: {
                        data: [],
                        loading: false,
                        success: false,
                        error: true
                    }
                }

            default: return state;
        }
}


export default crudOperation;