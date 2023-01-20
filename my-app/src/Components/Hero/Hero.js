import React from 'react';
import { Container,  MainHeading2 } from '../../GlobalStyles';
import { HeroVideo, HeroSection, HeroButton,  ButtonWrapper} from './HeroStyles';



const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo autoPlay muted loop src="./assets/hero.mp4"/>
      <Container>
        <MainHeading2>5 ESTRELLAS TRAMITES</MainHeading2>
        <ButtonWrapper>
        <HeroButton>LLAMA AHORA</HeroButton>
        </ButtonWrapper>
    </Container>
    </HeroSection>
  )
}

export default Hero