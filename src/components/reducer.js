export const initialState = {
    crono:0,
    running: false,
}


export const reducer = (state, action) =>{
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