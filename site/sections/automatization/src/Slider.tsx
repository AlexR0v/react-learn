import { Box } from '../../../ui/layout/Box2'
import { theme } from '../../../ui/theme'
import { Text } from '../../../ui/text/Text'
import { injectIntl } from 'react-intl'
import { Button } from '../../../ui/Button'
import React from 'react'
import messages from './Messages'
import { SliderStyle } from '../../../ui/auto/Slider'
import { SliderContent } from '../../../ui/auto/SliderContent'

const Slider = ({intl, state, slide}: any) => {
  return (
    <Box
      display={'flex'}
      position={'relative'}
      justify={'start'}
      margin={0}
    >
      <SliderStyle>
        {
          slide.map((item: any, index: number) => {
            return (
              <SliderContent
                key={index}
                style={{transform: `translateX(${state}%)`}}
              >
                <Box
                  width={'495px'}
                  height={'370px'}
                  bg={theme.colors.dark}
                  borderRadius={theme.borderRadius.m}
                >
                  {item}
                </Box>
                <Box
                  width={'30px'}
                  margin={0}
                />
                <Box
                  width={'390px'}
                  margin={0}
                >
                  <Box>
                    <Text
                      size={theme.fontSize.s}
                      lineHeight={theme.lineHeight.xs}
                    >
                      {intl.formatMessage(messages.text)}
                    </Text>
                  </Box>
                  <Box height={'76px'} />
                  <Button
                  >
                    {intl.formatMessage(messages.button)}
                  </Button>
                </Box>
              </SliderContent>
            )
          })
        }
      </SliderStyle>


    </Box>
  )
}

export default injectIntl(Slider)
