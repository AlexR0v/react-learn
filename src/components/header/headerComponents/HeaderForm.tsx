import React from 'react'
import styled from '@emotion/styled'
import theme from '../../ui/Theme'
import { WaveBig } from '../../ui/svg/Wave'
import { WaveBigBlock, WaveBigBlock2 } from '../../ui/WaveBlock'

const HeaderFormBlock = styled.div`
    width: 677px;
    height: 672px;
    background: radial-gradient(50.75% 50.75% at 50% 49.25%, #006D8D 0%, #0A4759 100%);
    position: relative;
    z-index: 2;`

const HeaderFormStyle = styled.form`
    width: 390px;
    height: 500px;
    left: 840px;
    top: 190px;
    background: ${theme.colors.dark};
    border-radius: 10px;
    margin: 126px 146px 46px 0;`

const HeaderForm = () => {
  return (
    <HeaderFormBlock>
      <HeaderFormStyle action='#'>

      </HeaderFormStyle>
      <WaveBigBlock>
        <WaveBig/>
      </WaveBigBlock>
      <WaveBigBlock2>
        <WaveBig/>
      </WaveBigBlock2>
    </HeaderFormBlock>
  )
}

export default HeaderForm
