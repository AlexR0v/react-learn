import React from 'react'
import HeaderTitleSvg from './HeaderTitleSvg'
import styled from '@emotion/styled'

const HeaderTitleBlock = styled.div`
    max-width: 600px;
    margin: 186px 0 0 105px;`

const HeaderTitleH1 = styled.h1`
    font-family: Blogger Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 70px;
    color: #3BB3C4;;
    margin: 0;`

const HeaderTitleH2 = styled.h2`
    font-family: Blogger Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 45px;
    color: #FFFFFF;
    margin: 0;`

const HeaderTitleP = styled.p`
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    color: #FFFFFF;
    margin: 0;`

const HeaderTitle = () => {
  return (
    <HeaderTitleBlock>
      <HeaderTitleH1>
        Riverdoc
      </HeaderTitleH1>
      <HeaderTitleH2>
        Система управления документами и задачами
      </HeaderTitleH2>
      <HeaderTitleSvg />
      <HeaderTitleP>
        Представляет собой готовое решение для
        автоматизации документооборота, делопроизводства
        и управления
        бизнес-процессами, включая контроль
        исполнительской дисциплины
      </HeaderTitleP>
    </HeaderTitleBlock>
  )
}

export default HeaderTitle
