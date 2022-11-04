import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import {originalsApi} from '../Services/apis'

export const getOriginalMovies = createAsyncThunk(
  'popularMovies/get',
  async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwtToken')}`,
      },
    }
    const res = fetch(originalsApi, options)
    return (await res).json()
  },
)

const originalSlice = createSlice({
  name: 'trending',
  initialState: {
    OLoading: false,
    originalMoviesData: [],
  },
  extraReducers: {
    [getOriginalMovies.pending]: state => {
      // eslint-disable-next-line no-param-reassign
      state.OLoading = true
    },
    [getOriginalMovies.fulfilled]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.OLoading = false
      const updatedData = action.payload.results.map(each => ({
        ...each,
        backImage: each.backdrop_path,
        posterPath: each.poster_path,
      }))
      // eslint-disable-next-line no-param-reassign
      state.originalMoviesData = updatedData.reverse()
    },
    [getOriginalMovies.rejected]: state => {
      // eslint-disable-next-line no-param-reassign
      state.OLoading = false
    },
  },
})
export default originalSlice
