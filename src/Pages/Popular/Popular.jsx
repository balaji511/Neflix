import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Card} from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import {PopularContainer, PopularHeader} from './PopularElements'
import {getPopularMovies} from '../../Store/PopularSlice'

export default function Popular() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPopularMovies())
  }, [dispatch])
  const popular = useSelector(state => state.popular)
  const {popularMoviesData} = popular

  return (
    <>
      <Header />
      <PopularContainer className="p-1">
        <PopularHeader className="text-start"> Popular Movies</PopularHeader>
        <div className="d-flex flex-wrap pt-1 justify-content-center">
          {popularMoviesData.map(each => (
            <Link to={`/movie/${each.id}`}>
              <Card.Img
                key={each.id}
                src={each.posterPath}
                style={{
                  height: '170px',
                  margin: '3.5px',
                  width: '115px',
                  borderRadius: '5px',
                }}
              />
            </Link>
          ))}
        </div>
      </PopularContainer>
    </>
  )
}
