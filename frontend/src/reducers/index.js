import userNameReducer from './wordReducer';
import passwordReducer from './passwordReducer'
import farmerReducer from './FarmerReducer';
import descReducer from './descReducer';
import priceReducer from './priceReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    userNameReducer,
    passwordReducer,
    farmerReducer,
    descReducer,
    priceReducer
})

export default allReducers;