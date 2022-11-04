import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Card} from 'react-bootstrap'
import ClipLoader from 'react-spinners/ClipLoader'
import {Link} from 'react-router-dom'
import {
  MovieContainer,
  MovieDetailContainer,
  MovieDetailInfo,
  MovieDate,
  MovieDescription,
  SimilarHeader,
} from './MovieElements'
import Header from '../../Components/Header/Header'
import {getMovieData} from '../../Store/MovieSlice'
import {PatchHeader, PatchDescription} from '../Home/HomeElements'
// import {TrendingHeader} from '../../Components/TrendingSlick/TrendingSlickElements'

export default function MovieDetailedView(props) {
  const {match} = props
  const {params} = match
  const {id} = params
  const movie = useSelector(state => state.movie)
  console.log(movie)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMovieData(id))
  }, [dispatch, id])

  const {similarMovies, MLoading, Languages, genres} = movie
  const {
    overview,
    backImage,
    title,
    releaseDate,
    rating,
    posterPath,
  } = movie.movieData

  const date = new Date(releaseDate)

  const LoadingView = () => (
    <div style={{alignSelf: 'center', margin: '300px'}}>
      <ClipLoader type="TailSpin" color="red" height={50} width={50} />
    </div>
  )

  const MovieView = () => (
    <>
      <MovieDetailContainer backImage={backImage} posterPath={posterPath}>
        <MovieDetailInfo className="p-3">
          <PatchHeader>{title}</PatchHeader>
          <div className="d-flex  align-items-center">
            <MovieDate className="bg-warning  p-1 text-black">
              {date.getFullYear() || releaseDate}
            </MovieDate>
            <MovieDate className="p-1">{rating}/10</MovieDate>
          </div>
          <PatchDescription>{overview}</PatchDescription>
          <Button className="bg-white text-black">Play</Button>
        </MovieDetailInfo>
      </MovieDetailContainer>
      <MovieDescription className="pt-4 p-1 text-white flex-md-row flex-column">
        <div className="d-flex align-items-center flex-wrap ">
          <p className="p-2">Genres - </p>
          {genres.map(each => (
            <MovieDate className="p-1 mr-1" key={String(each)}>
              {each}
            </MovieDate>
          ))}
          <MovieDate className="p-1 mr-1 ">4K</MovieDate>
          <MovieDate className="p-1 mr-1">ULTRA</MovieDate>
        </div>
        <div className="d-flex align-items-center flex-wrap ">
          <p className="p-2">Languages - </p>
          {Languages.map(each => (
            <MovieDate className="p-1 mr-1" key={String(each)}>
              {each}
            </MovieDate>
          ))}
          <MovieDate className="p-1 mr-1">U/A</MovieDate>
        </div>
      </MovieDescription>
      <SimilarHeader>More like this</SimilarHeader>
      <div
        className=" d-flex flex-wrap justify-content-center"
        style={{width: '100%', marginLeft: '1px'}}
      >
        {similarMovies.map(each => (
          <Link key={each.id} to={`/movie/${each.id}`}>
            <Card.Img
              className="m-1"
              src={each.backImage}
              style={{height: '75px', width: '115px', borderRadius: '5px'}}
            />
          </Link>
        ))}
      </div>
    </>
  )
  return (
    <>
      <Header />
      <MovieContainer>{MLoading ? LoadingView() : MovieView()}</MovieContainer>
    </>
  )
}
