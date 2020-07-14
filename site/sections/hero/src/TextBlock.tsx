import { Text } from '../../../ui/text/Text'
import theme from '../../../ui/theme/Theme'
import { WavesL } from '../../../ui/svg/Wave'
import { Box } from '../../../ui/layout/Box2'
import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import { TitleH1, TitleH2 } from '../../../ui/theme/Titles'
import messages from './Messages'
import { injectIntl } from 'react-intl'
import fontSize from '../../../ui/theme/FontSize'


const TextBlock = ({intl}: any) => {
  return (
    <Box width='510px'>
      <TitleH1>
        <Title />
      </TitleH1>
      <TitleH2>
        <SubTitle />
      </TitleH2>
      <Box height='30px' />
      <WavesL
        width={82}
        height={12}
      />
      <Box height='30px' />
      <Text
        color={theme.colors.white}
        size={fontSize.m}
      >
        {intl.formatMessage(messages.hero.text)}
      </Text>
    </Box>
  )
}

export default injectIntl(TextBlock)
