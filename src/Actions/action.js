import axios from '../axios'


const setmovies = (results) => {
    return {
        type:'SET_MOVIES',
        movies:results
    }
}


const setMovies = (requestUrl) => {
    return async (dispatch) => {
        console.log(requestUrl);
        const request = await axios.get(requestUrl);
        console.log(request.data.results);
        dispatch(setmovies(request.data.results))
    }
}

export const actionCreators ={
    setMovies
}

