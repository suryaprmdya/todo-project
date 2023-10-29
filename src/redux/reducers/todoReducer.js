const intialState = {
    todos: [],
    isLoading: false,
    error: ""
}

function todoReducer(state=intialState, action) {
    switch (action.type) {
        default:
            console.log(state)
    }
}
export default todoReducer