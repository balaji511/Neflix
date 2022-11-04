import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

export const getMovieData = createAsyncThunk('getMovie/id', async id => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${Cookies.get('jwtToken')}`,
    },
  }
  const res = fetch(`https://apis.ccbp.in/movies-app/movies/${id}`, options)
  return (await res).json()
})

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    MLoading: false,
    movieData: [],
    similarMovies: [],
    Languages: [],
    genres: [],
  },
  extraReducers: {
    [getMovieData.pending]: state => {
      // eslint-disable-next-line no-param-reassign
      state.MLoading = true
    },
    [getMovieData.fulfilled]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.MLoading = false

      const updatedMovieDetails = {
        title: action.payload.movie_details.title,
        adult: action.payload.movie_details.adult,
        backImage: action.payload.movie_details.backdrop_path,
        id: action.payload.movie_details.id,
        budget: action.payload.movie_details.budget,
        posterPath: action.payload.movie_details.poster_path,
        overview: action.payload.movie_details.overview,
        runtime: action.payload.movie_details.runtime,
        releaseDate: action.payload.movie_details.release_date,
        rating: action.payload.movie_details.vote_average,
      }
      const LanguagesData = action.payload.movie_details.spoken_languages.map(
        each => each.english_name,
      )
      const genresData = action.payload.movie_details.genres.map(
        each => each.name,
      )
      const similarMoviesData = action.payload.movie_details.similar_movies.map(
        each => ({
          ...each,
          backImage: each.backdrop_path,
          posterPath: each.poster_path,
        }),
      )
      // eslint-disable-next-line no-param-reassign
      state.movieData = updatedMovieDetails
      // eslint-disable-next-line no-param-reassign
      state.similarMovies = similarMoviesData
      // eslint-disable-next-line no-param-reassign
      state.genres = genresData
      // eslint-disable-next-line no-param-reassign
      state.Languages = LanguagesData
    },
    [getMovieData.rejected]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.MLoading = false
      console.log(action.payload, 'Rejected')
    },
  },
})

export default movieSlice
