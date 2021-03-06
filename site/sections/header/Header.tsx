import styled from '@emotion/styled'
import Logo from '../../ui/icon/Logo'
import { Button } from '../../ui/Button'
import React from 'react'
import { Box } from '../../ui/layout/Box2'
import { Layout } from '../../ui/layout/Layout'
import { injectIntl } from 'react-intl'
import messages from '../hero/src/Messages'
import { theme } from '../../ui/theme'


const HeaderStyle = styled.header(()=>({
  background: theme.colors.darkBlue
}))


const Header = ({intl}: any)=>{
    return (
      <HeaderStyle>
        <Box height={'50px'} />
        <Layout>
          <Logo />
          <Button
            bg={'transparent'}
            padding={'10px 30px'}
          >
            {intl.formatMessage(messages.headerButton)}
          </Button>
        </Layout>
      </HeaderStyle>
    )
}

export default injectIntl(Header)
