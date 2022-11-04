import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: black;
`

export const WallPatchInfo = styled.div`
  font-family: Roboto;
  color: white;
  width: 50%;
  margin-top: 50px;
  @media screen and (max-width: 800px) {
    width: 75%;
  }
  //   align-self: flex-end;
`

export const WallPatchContainer = styled.div`
  background-image: url(${props => props.backImage});
  background-size: cover;
  height: 89vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 900px) {
    background-image: url(${props => props.posterPath});
    height: 70vh;
    display: flex;
    flex-direction: column;
    background-size: cover;
  }
`
export const PatchDescription = styled.p`
  font-size: 10px;
  color: 'red';
`

export const PatchHeader = styled.h1`
  font-size: 30px;
`
