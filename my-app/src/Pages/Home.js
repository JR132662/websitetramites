import React from 'react'
import Hero from '../Components/Hero/Hero'
import Features from '../Components/Features/Features'
import { Content } from '../Components/Content/Content';
import { heroOne, heroTwo, heroThree } from '../Data/HeroData';

function Home() {
  return (
    <>
    <Hero />
    <Features />
    <Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
    </>
    
  )
}

export default Home