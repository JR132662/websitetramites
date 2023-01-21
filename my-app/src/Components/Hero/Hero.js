import React from 'react';
import { Container,  MainHeading2,Container3 } from '../../GlobalStyles';
import { HeroVideo, HeroSection, HeroButton,  ButtonWrapper} from './HeroStyles';



const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo autoPlay muted loop src="./assets/hero.mp4"/>
      <Container3><Container>
        <MainHeading2>5 ESTRELLAS TRAMITES</MainHeading2>
        <ButtonWrapper>
        <HeroButton>LLAMA AHORA</HeroButton><HeroButton>Contacto</HeroButton>
        </ButtonWrapper>
    </Container>
    </Container3>
    </HeroSection>
  )
}

export default Hero