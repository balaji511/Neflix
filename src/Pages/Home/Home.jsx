import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button} from 'react-bootstrap'
import ClipLoader from 'react-spinners/ClipLoader'
import {getTrendingMovies} from '../../Store/TrendingSlice'
import Header from '../../Components/Header/Header'
import './Home.css'
import {
  HomeContainer,
  WallPatchContainer,
  WallPatchInfo,
  PatchHeader,
  PatchDescription,
} from './HomeElements'
import TrendingSlick from '../../Components/TrendingSlick/TrendingSlick'
import {getPopularMovies} from '../../Store/PopularSlice'
import PopularSlick from '../../Components/PopularSlick/PopularSlick'
import {getOriginalMovies} from '../../Store/OriginalSlice'
import OriginalSlick from '../../Components/OriginalSlick/OriginalSlick'

export default function Home(props) {
  const {history} = props
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTrendingMovies())
    dispatch(getOriginalMovies())
    dispatch(getPopularMovies())
  }, [dispatch])
  //
  const trending = useSelector(state => state.trending)
  const {pathWall} = trending
  const {TLoading} = trending
  const {title, posterPath, backImage, overview, id} = pathWall

  //
  const LoadingView = () => (
    <div style={{alignSelf: 'center', paddingTop: '250px'}}>
      <ClipLoader type="TailSpin" color="red" height={50} width={50} />
    </div>
  )

  const WallPatchData = () => (
    <WallPatchContainer backImage={backImage} posterPath={posterPath}>
      <WallPatchInfo className="p-2">
        <PatchHeader>{title}</PatchHeader>
        <PatchDescription>{overview}</PatchDescription>
        <Button
          className="bg-white text-black"
          onClick={() => history.push(`/movie/${id}`)}
        >
          Play
        </Button>
      </WallPatchInfo>
    </WallPatchContainer>
  )

  return (
    <>
      <Header />
      <HomeContainer>
        {TLoading ? LoadingView() : WallPatchData()}
        <TrendingSlick />
        <PopularSlick />
        <OriginalSlick />
      </HomeContainer>
    </>
  )
}
