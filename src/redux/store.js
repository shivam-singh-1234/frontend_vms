import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import rootReducer from "../redux/reducer/index";
import { composeWithDevTools } from '@redux-devtools/extension';
import ReduxThunk from "redux-thunk";

const store = createStore(
    rootReducer,composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;