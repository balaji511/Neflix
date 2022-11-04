import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: rgb(10, 20, 10, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: '100vw';
  overflow: hidden;
  padding-right: 20px;
`

export const HeaderImage = styled.img`
  height: '10px';
`

export const HeaderIcon = styled.p`
  font-size: 25px;
  margin: 10px;
`

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  //   position: fixed;
  @media screen and (min-width: 800px) {
    display: none;
  }
`
export const InputElement = styled.input`
  background-color: black;
  outline: 0px;
  margin-top: 6px;
  color: white;
  border-radius: 5px;
`

export const HeaderMenuMedium = styled.div`
  display: none;
  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`

export const HeaderHeadMedium = styled.h5`
  padding: 10px;
  font-size: 22px;
  padding-right: 10px;
  font-family: Roboto;
  font-weight: 350;
  padding-left: 20px;
`
