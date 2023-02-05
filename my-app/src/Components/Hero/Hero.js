import React from 'react';
import { Container,  MainHeading2,Heading2 } from '../../GlobalStyles';
import { HeroVideo, HeroSection, HeroButton,  ButtonWrapper, HeroDiv} from './HeroStyles';



const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="./assets/flag.jpg" autoPlay muted loop/>
      <HeroDiv>
        <Container>
          <MainHeading2>5 ESTRELLAS TRAMITES</MainHeading2>
          <Heading2>Llama ahora para mas informacion</Heading2>
          <ButtonWrapper>
          <a href='/Contact'>
          <HeroButton>Contacte nos</HeroButton>
          </a>
          <a href="tel://3056324462"><HeroButton>305-632-4462</HeroButton></a>
          </ButtonWrapper>
        </Container>
      </HeroDiv>
  </HeroSection>
  )
}

export default Hero