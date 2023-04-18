import React from 'react'
import styled from 'styled-components'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {RiSpotifyFill} from 'react-icons/ri'


const Footer = () => {
  return (
    <FooterContainer>
      <SocialBox>
        <FooterTitle>
          Follow us:
          <Instabox>
            <AiOutlineInstagram size={25} color='white'/>
            </Instabox>
              <TwitterBox>
                <AiOutlineTwitter size={25} color='white'/>
              </TwitterBox>
            <FaceBox>
              <AiFillFacebook size={25} color='white'/>
            </FaceBox>
              <SpotBox>
              <RiSpotifyFill size={25} color='white'/>
            </SpotBox>
          </FooterTitle>
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
  justify-content: center;
  aline-itenms: center;
  flex-direction: column;
`;

const SocialBox = styled.div`
  display: flex;
  width: 500px;
  
`;

const FooterTitle = styled.h3`
  color: white;
  display: flex;
  font-family: 'Lexend', sans-serif;
  margin: 40px 0px 25px 40px;
`;


const Instabox = styled.div`
  margin: 30px 30px 0px -95px;
  padding: 10px;

`;
const TwitterBox = styled.div`
  margin: 30px 30px 0px 30px;
  padding: 10px;

`;
const FaceBox = styled.div`
  margin: 30px 30px 0px 30px;
  padding: 10px;

`;
const SpotBox = styled.div`
  margin: 30px 30px 0px 30px;
  padding: 10px;
`;

const FooterContainer2 = styled.div`
  color: white;
  display: flex;
  margin: 30px;
  padding: 10px;
  border-left: 2px solid white;
`;


export default Footer