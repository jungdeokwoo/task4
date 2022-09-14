import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <IssueHeader>
      <HeaderTitle>Angular/Angular-cli</HeaderTitle>
    </IssueHeader>
  )
}

export default Header

const IssueHeader = styled.header`
  ${({ theme }) => theme.flex()}
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
`

const HeaderTitle = styled.p`
  ${({ theme }) => theme.headerFont}
`
