import ProductChangerReducer from './reducers/ProoductChangerReducer'
const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({
    ProductChanger: ProductChangerReducer,
})

let store = createStore(reducers);

export default store