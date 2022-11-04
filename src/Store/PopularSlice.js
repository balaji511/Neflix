import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import {popularMoviesApi} from '../Services/apis'

export const getPopularMovies = createAsyncThunk(
  'popularMovies/get',
  async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwtToken')}`,
      },
    }
    const res = fetch(popularMoviesApi, options)
    return (await res).json()
  },
)

const popularSlice = createSlice({
  name: 'trending',
  initialState: {
    PLoading: false,
    popularMoviesData: [],
  },
  extraReducers: {
    [getPopularMovies.pending]: state => {
      // eslint-disable-next-line no-param-reassign
      state.PLoading = true
    },
    [getPopularMovies.fulfilled]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.PLoading = false
      const updatedData = action.payload.results.map(each => ({
        ...each,
        backImage: each.backdrop_path,
        posterPath: each.poster_path,
      }))
      // eslint-disable-next-line no-param-reassign
      state.popularMoviesData = updatedData
    },
    [getPopularMovies.rejected]: state => {
      // eslint-disable-next-line no-param-reassign
      state.TLoading = false
    },
  },
})
export default popularSlice
