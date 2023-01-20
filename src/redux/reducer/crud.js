import { GET_USER_LOADING,GET_USER_LOADED,GET_USER_ERROR,
    GET_VOUCHER_LOADING,GET_VOUCHER_LOADED,GET_VOUCHER_ERROR,
    POST_VOUCHER_ERROR,POST_VOUCHER_LOADED,POST_VOUCHER_LOADING} from "../actions/actionType";

const initialData = {
    userList: {
        data: [],
        loading: false,
        success: false,
        error: false
    },
    voucherList:{
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

                case GET_VOUCHER_LOADING:
                    return{
                        ...state,
                        voucherList: {
                            data: [],
                            loading: true,
                            success: false,
                            error: false
                        }
                    }
        
                case GET_VOUCHER_LOADED:
                    return {
                        ...state,
                        voucherList: {
                            data: action.payload,
                            loading: false,
                            success: true,
                            error: false
                        }
                    }
        
                case GET_VOUCHER_ERROR:
                        return {
                            ...state,
                            voucherList: {
                                data: [],
                                loading: false,
                                success: false,
                                error: true
                            }
                        }
                
                        case POST_VOUCHER_LOADING:
                            return{
                                ...state,
                                voucherList: {
                                    data: state.voucherList.data,
                                    loading: true,
                                    success: false,
                                    error: false
                                }
                            }
                
                        case POST_VOUCHER_LOADED:
                            let all=state.voucherList.data;
                            return {
                                
                                ...state,
                                voucherList: {
                                    data: all.concat(action.payload),
                                    loading: false,
                                    success: true,
                                    error: false
                                }
                            }
                
                        case POST_VOUCHER_ERROR:
                                return {
                                    ...state,
                                    voucherList: {
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