import React from 'react';
import { Container,  MainHeading2,Heading2 } from '../../GlobalStyles';
import { HeroVideo, HeroSection, HeroButton,  ButtonWrapper, HeroDiv, HeroDiv2} from './HeroStyles';



const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo autoPlay muted loop src="./assets/hero.mp4"/>
      <HeroDiv>
        <Container>
          <MainHeading2>5 ESTRELLAS TRAMITES</MainHeading2>
          <Heading2>Llama ahora para mas informacion</Heading2>
          <ButtonWrapper>
          <HeroButton>LLAMA AHORA</HeroButton><HeroButton>Contacto</HeroButton>
          </ButtonWrapper>
        </Container>
      </HeroDiv>
  </HeroSection>
  )
}

export default Hero