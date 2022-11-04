import {AiOutlineMenuUnfold} from 'react-icons/ai'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {BiSearchAlt} from 'react-icons/bi'
import {GiCancel} from 'react-icons/gi'
import {MdAccountBox} from 'react-icons/md'
import {
  HeaderContainer,
  HeaderImage,
  HeaderMenu,
  HeaderIcon,
  InputElement,
  //   HeaderMenuMedium,
  HeaderHeadMedium,
} from './HeaderElements'
import {trendingActions} from '../../Store/TrendingSlice'

export default function Header() {
  const [searchInput, setSearchInput] = useState('')
  const trending = useSelector(state => state.trending)
  const dispatch = useDispatch()
  const {searchBar, menuBar} = trending

  const HeaderMenuSmall = () => (
    <div
      className="mt-5 d-flex d-md-none  align-items-center justify-content-between text-white bg-black p-2"
      style={{
        position: 'absolute',
        top: '21px',
        width: '100%',
        fontFamily: 'Roboto',
      }}
    >
      <div className="d-flex">
        <h6 className="m-2 ">
          <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
            Home
          </Link>
        </h6>
        <h6 className="m-2">
          <Link to="/popular" style={{textDecoration: 'none', color: 'white'}}>
            Popular
          </Link>
        </h6>
        <h6 className="m-2">
          <Link to="/account" style={{textDecoration: 'none', color: 'white'}}>
            Account
          </Link>
        </h6>
      </div>
      <HeaderIcon>
        <GiCancel onClick={() => dispatch(trendingActions.toggleMenuBar())} />
      </HeaderIcon>
    </div>
  )
  return (
    <>
      <HeaderContainer className="text-white">
        <Link to="/">
          <HeaderImage
            src="https://res.cloudinary.com/dllshtsed/image/upload/v1666854691/Netflix_Logo_Digital-Video_ax9x1f.png"
            style={{height: '69px'}}
          />
        </Link>
        <HeaderMenu>
          {searchBar ? (
            <InputElement
              type="search"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
            />
          ) : (
            <HeaderIcon
              onClick={() => dispatch(trendingActions.toggleSearchBar())}
            >
              <BiSearchAlt />
            </HeaderIcon>
          )}
          <HeaderIcon onClick={() => dispatch(trendingActions.toggleMenuBar())}>
            <AiOutlineMenuUnfold className="text-white" />
          </HeaderIcon>
        </HeaderMenu>
        <>
          <div className="d-none align-items-center d-md-flex">
            {/* <HeaderMenuMedium> */}
            <InputElement
              type="search"
              value={searchInput}
              className="mb-3 mr-2"
              onChange={e => setSearchInput(e.target.value)}
            />
            <HeaderHeadMedium>
              <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
                Home
              </Link>
            </HeaderHeadMedium>
            <HeaderHeadMedium>
              <Link
                to="/popular"
                style={{textDecoration: 'none', color: 'white'}}
              >
                Popular
              </Link>
            </HeaderHeadMedium>
            <HeaderHeadMedium>
              <Link
                to="/account"
                style={{textDecoration: 'none', color: 'white'}}
              >
                <MdAccountBox className="mb-0" style={{fontSize: '29px'}} />
              </Link>
            </HeaderHeadMedium>
            {/* </HeaderMenuMedium> */}
          </div>
        </>
      </HeaderContainer>
      {menuBar && HeaderMenuSmall()}
    </>
  )
}
