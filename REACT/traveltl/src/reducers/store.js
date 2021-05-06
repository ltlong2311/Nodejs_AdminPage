
var redux = require('redux');


const postInitialState = {
    postData: {},
    showImageDes: false,
    imageDes:"",
    showFormLogin: false,
}
const allReducer = (state = postInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            return state
        case "CHANGE_EDIT_POST":
            return {...state, isEdit:!state.isEdit}
    
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function(){
    // console.log(JSON.stringify(store.getState()));
})
export default store;