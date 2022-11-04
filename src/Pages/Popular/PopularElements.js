import styled from 'styled-components'

export const PopularContainer = styled.div`
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  min-height: 100vh;
  font-family: Roboto;
  color: white;
  //   padding: 10px;
  background-color: black;
`

export const PopularHeader = styled.h5`
  font-size: 22px;
  text-align: left;
  font-weight: 370;
  padding-top: 75px;
  padding-left: 25px;
  @media screen and (max-width: 768px) {
    padding-left: 5px;
  }
`
