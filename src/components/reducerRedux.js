import { createStore } from 'redux';


const initialState = {
    crono:0,
    running: false,
    pepe:'Jose'
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'start':
            return {...state, running: true}
        case 'stop':
            return {...state, running: false}
        case 'resume':
            return {...state, running: true}
        case 'reset':
            return {...state, crono: 0}
        case 'addTime':
            return {...state, crono: state.crono + action.payload}
        default:
            return state;
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;