const intialState = {
    todos: [
        {id: 1, title: "Todo 1", isFinish: false},
        {id: 2, title: "Todo 2", isFinish: false},
        {id: 3, title: "Todo 3", isFinish: false}
    ],
    isLoading: false,
    error: ""
}

function todoReducer(state=intialState, action) {
    switch (action) {
        default:
            return state
    }
}


export default todoReducer