import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import {trendingMoviesApi} from '../Services/apis'

const random = Math.ceil(Math.random() * 10)

export const getTrendingMovies = createAsyncThunk(
  'trendingMovies/get',
  async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwtToken')}`,
      },
    }
    const res = fetch(trendingMoviesApi, options)
    return (await res).json()
  },
)

const trendingSlice = createSlice({
  name: 'trending',
  initialState: {
    TLoading: false,
    pathWall: [],
    trendingMoviesData: [],
    searchBar: false,
    menuBar: false,
  },
  reducers: {
    toggleSearchBar(state) {
      // eslint-disable-next-line no-param-reassign
      state.searchBar = !state.searchBar
    },
    toggleMenuBar(state) {
      // eslint-disable-next-line no-param-reassign
      state.menuBar = !state.menuBar
    },
  },
  extraReducers: {
    [getTrendingMovies.pending]: state => {
      // eslint-disable-next-line no-param-reassign
      state.TLoading = true
    },
    [getTrendingMovies.fulfilled]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.TLoading = false
      const updatedData = action.payload.results.map(each => ({
        ...each,
        backImage: each.backdrop_path,
        posterPath: each.poster_path,
      }))
      // eslint-disable-next-line no-param-reassign
      state.trendingMoviesData = updatedData
      // eslint-disable-next-line no-param-reassign
      state.pathWall = state.trendingMoviesData[random]
    },
    [getTrendingMovies.rejected]: state => {
      // eslint-disable-next-line no-param-reassign
      state.TLoading = false
    },
  },
})
export default trendingSlice
export const trendingActions = trendingSlice.actions
