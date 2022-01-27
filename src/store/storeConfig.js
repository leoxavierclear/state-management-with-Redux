import { createStore, combineReducers } from 'redux'


const reducers = combineReducers({
    numeros: function(state, action) {
        return{
            min: 1,
            máx: 10
        }
    }
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig