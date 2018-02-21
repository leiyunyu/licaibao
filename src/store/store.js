import {createStore} from 'redux';
let store = createStore(reducres);
function poemlist(state, action){
    if(action.type === 'add'){
        return [...state, action.data]
    } else if(action.type === 'concat'){
        return [...state, ...action.data]
    }
    return [...state]       
}
function count(state=0, action){
    switch (action.type){
        case 'add': return ++state;break;
        case 'minus': return --state;break;
        default:return state            
    }
}
function reducres(state={poem:[]}, action){
    return {
        poem: poemlist(state.poem,action),
        count: count(state.count, action)
    }
}
export default store;