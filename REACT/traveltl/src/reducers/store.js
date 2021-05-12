import { toast } from "react-toastify";
var redux = require('redux');


const postInitialState = {
    postData: {},
    showImageDes: false,
    imageDes: "",
    notify: "",
    showAddPostForm: false,
}
const allReducer = (state = postInitialState, action) => {
    switch (action.type) {
        case "CHANGE_EDIT_POST":
            return {...state, isEdit:!state.isEdit}
        case "NOTIFY_SUCCESS":
            toast.success(action.notify);
            return {...state, notify:action.notify}
        case "NOTIFY_ERROR":
            toast.error(action.notify);
            return {...state, notify:action.notifyEdit}
        case "SHOW_ADD_POST_FORM":
            console.log(state.showAddPostForm);
            return {...state, showAddPostForm:!state.showAddPostForm}
        case "ADD_POST_DATA":
            console.log(action.newPost);
            return state
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function(){
    // console.log(JSON.stringify(store.getState()));
})
export default store;