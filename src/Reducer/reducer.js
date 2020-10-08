const initialState = {
    allMovie: [],
    movies:[],
    c: 5
}

const reducer = (state = initialState, action) => {
   switch(action.type){
       case 'SET_MOVIES':
           return {
                ...state,
                movies: [ ...action.movies ]
           }
        default:
            return state
   }
}

export default reducer;