import React, { useState } from 'react'
import { Box } from '../../ui/layout/Box2'
import { theme } from '../../ui/theme'
import Section from '../../ui/Section'
import { Layout } from '../../ui/layout/Layout'
import { WaveTitle } from './src/WaveTitle'
import { ArrowBlock } from './src/ArrowBlock'
import Title from './src/Title'
import Slider from './src/Slider'

const Automatization = () => {

  const slide: Array<object> = [
    <img src={'site/ui/img/slider/React-img.png'} alt='slide-image'/>,
    <img src={'site/ui/img/slider/React-img1.png'} alt='slide-image'/>,
    <img src={'site/ui/img/slider/React-img2.png'} alt='slide-image'/>,
    <img src={'site/ui/img/slider/React-img3.png'} alt='slide-image'/>,
  ]

  const [x, setX] = useState(0)

  const sliderShow = (event: any) => {

    if (event.currentTarget.dataset.direction === 'next') {

      x === -100*(slide.length-1)? setX(0): setX(x-100)

    }

    if (event.currentTarget.dataset.direction === 'prev') {

      x === 0? setX(-100*(slide.length-1)) : setX(x+100)

    }
  }

  return (
    <Section bg={theme.colors.white}>
      <Box height='85px' />
      <WaveTitle />
      <Box height='30px' />
      <Layout
        justify={'start'}
      >
        <ArrowBlock
          sliderShow={sliderShow}
        />
        <Title />
      </Layout>
      <Box height={'80px'}/>
      <Box display={'flex'}>
        <Box width={'209px'} width100={'100%'}/>
        <Slider slide={slide} state={x} />
      </Box>
      <Box
        width={'285px'}
        height={'118px'}
        bgI={`url('site/ui/icon/Wave.svg')`}
        position={'absolute'}
        left={'135px'}
        top={'1408px'}
        zIndex={2}
        width100={'100%'}
      />
      <Box height='234px' />
    </Section>
  )
}

export default Automatization
