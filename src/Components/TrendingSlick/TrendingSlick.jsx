import {useSelector} from 'react-redux'
import {Card} from 'react-bootstrap'
import ClipLoader from 'react-spinners/ClipLoader'
import {Link} from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {TrendingHeader, TrendingSlickContainer} from './TrendingSlickElements'
import '../../App.css'

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
}

export default function TrendingSlick() {
  const trending = useSelector(state => state.trending)
  const {trendingMoviesData, TLoading} = trending
  const LoadingView = () => (
    <div style={{alignSelf: 'center', padding: '100px'}}>
      <ClipLoader type="TailSpin" color="red" height={50} width={50} />
    </div>
  )
  return (
    <TrendingSlickContainer>
      {TLoading ? (
        LoadingView()
      ) : (
        <>
          <TrendingHeader className="text-white">Trending now</TrendingHeader>
          <Slider {...settings}>
            {trendingMoviesData.map(each => (
              <Card key={each.id} className="slickCard">
                <Link to={`movie/${each.id}`}>
                  <Card.Img src={each.backImage} className="slickImage" />
                </Link>
              </Card>
            ))}{' '}
          </Slider>
        </>
      )}
    </TrendingSlickContainer>
  )
}
