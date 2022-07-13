import { Provider } from "react-redux";
import movieInfos from "./Store";
import Reducers from './Reducers';

const MovieProvider = ({children}) =>
{
    const store = createStore(Reducers, movieInfos)
    return(
        <Provider store={store}>
            <children/>
        </Provider>
    )
}
export default MovieProvider;