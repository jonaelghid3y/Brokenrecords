import React from 'react'
import styled from 'styled-components'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {GrFacebook} from 'react-icons/gr'
import {BsSpotify} from 'react-icons/bs'


const Footer = () => {
  return (
    <FooterContainer>
      <SocialBox>
        <Instabox>
          <AiOutlineInstagram size={45} color='white'/>
        </Instabox>
          <TwitterBox>
            <AiOutlineTwitter size={45} color='white'/>
          </TwitterBox>
        <FaceBox>
          <GrFacebook size={35} color='white'/>
        </FaceBox>
          <SpotBox>
            <BsSpotify size={35} color='white'/>
          </SpotBox>
      </SocialBox>
      <FooterContainer2>
        <div>
          About us
        </div>
        <div>
          Help! 
        </div>
        <div>
          location
        </div>
      </FooterContainer2>
    </FooterContainer>

  )
}

const FooterContainer = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
`;

const SocialBox = styled.div `
  display: flex;
  justify-content: center;
`;

const Instabox = styled.div `
  margin: 30px;
`;
const TwitterBox = styled.div `
  margin: 30px;
`;
const FaceBox = styled.div `
  margin: 30px;
`;
const SpotBox = styled.div `
  margin: 30px;
`;

const FooterContainer2 = styled.div `
  color: white;
`;


export default Footer