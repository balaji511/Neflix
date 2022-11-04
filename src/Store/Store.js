import {configureStore} from '@reduxjs/toolkit'
import loginSlice from './LoginSlice'
import trendingSlice from './TrendingSlice'
import popularSlice from './PopularSlice'
import originalSlice from './OriginalSlice'
import movieSlice from './MovieSlice'

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    trending: trendingSlice.reducer,
    popular: popularSlice.reducer,
    original: originalSlice.reducer,
    movie: movieSlice.reducer,
  },
})
export default store
