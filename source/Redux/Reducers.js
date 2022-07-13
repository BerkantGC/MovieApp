export default function(state, action)
{
    switch(action.type){
        case 'RANDOM_MOVIE':
            return {...state, randomMovieImage: action.payload.list, randomMovieTitle: action.payload.title};
            
        case 'POPULAR_MOVIES':
            return {...state, popularMovies: [...state.popularMovies, action.payload.movies]};

        case 'TOP_RATED':
            return {...state, topRated: [...state.topRated, action.payload]};
        
        default: 
        return state;
        break;
    }
}