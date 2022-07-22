import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import userReducer from '../features/User/userSlice';
import movieReducer from '../features/movie/movieSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck:false,
    })
})