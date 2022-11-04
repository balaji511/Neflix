import {FcGoogle} from 'react-icons/fc'
import {AiFillYoutube, AiFillTwitterCircle} from 'react-icons/ai'
import {FooterContainer, FooterHeading, FooterImages} from './FooterElements'

export default function Footer() {
  return (
    <FooterContainer className="p-5 pb-5 bg-black">
      <FooterHeading>Contact us</FooterHeading>
      <FooterImages>
        <FcGoogle className="m-1" />
        <AiFillYoutube className="m-1" />
        <AiFillTwitterCircle className="m-1" />
      </FooterImages>
    </FooterContainer>
  )
}
