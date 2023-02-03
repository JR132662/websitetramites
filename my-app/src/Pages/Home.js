import React from 'react'
import Hero from '../Components/Hero/Hero'
import Features from '../Components/Features/Features'
import { Content } from '../Components/Content/Content';
import { heroOne, heroTwo, heroThree, heroFour } from '../Data/HeroData';
import Services from '../Components/Services/Services';
import { Content2 } from '../Components/Content copy/Content2';
import Form from '../Components/Form/Form'

function Home() {
  return (
    <>
    <Hero />
    <Features />
    <Content2 {...heroFour} />
    {/* <Services /> */}
    <Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
      <Form/>
    </>
    
  )
}

export default Home