import styled from 'styled-components'

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Roboto;
  background-color: black;
`

export const MovieBanner = styled.div`
  display: flex;
`

export const MovieDetailContainer = styled.div`
  background-image: url(${props => props.backImage});
  background-size: cover;
  height: 89vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    background-image: url(${props => props.posterPath});
    height: 70vh;
    display: flex;
    flex-direction: column;
    background-size: cover;
  }
`

export const MovieDetailInfo = styled.div`
  font-family: Roboto;
  color: white;
  width: 60%;
  margin-top: 80px;
  @media screen and (max-width: 800px) {
    width: 85%;
  }
  //   align-self: flex-end;
`
export const MovieDate = styled.p`
  font-size: 14px;
  width: '3vw';
  padding-right: 10px;
  text-align: left;
  margin-right: 5px;
  border-radius: 5px;
  border: 1px solid white;
`

export const MovieDescription = styled.div`
  display: flex;
`
export const SimilarHeader = styled.h5`
  font-size: 22px;
  text-align: left;
  position: relative;
  font-weight: 370;
  margin-left: 10px;
  color: white;
`
