import React from 'react'
import { Container,  MainHeading2,Heading2,Section } from '../../GlobalStyles';
import { HeroVideo, HeroSection, HeroButton,  ButtonWrapper, HeroDiv, HeroDiv2} from './SectionStyles';


const SectionApt = () => {
  return (
    <Section>
    <Container>
          <MainHeading2>5 ESTRELLAS TRAMITES</MainHeading2>
          <Heading2>Llama ahora para mas informacion</Heading2>
          <ButtonWrapper>
          <HeroButton>LLAMA AHORA</HeroButton>
          <HeroButton>Contacto</HeroButton>
          </ButtonWrapper>
    </Container>
    </Section>
  )
}

export default SectionApt