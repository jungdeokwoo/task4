import React, { useContext } from 'react'
import styled from 'styled-components'
import { GithubContext } from 'context/GithubContext'

const IssueListLastPageMessage = () => {
  const { isLastPage } = useContext(GithubContext)

  return isLastPage && <LastPageMessage>마지막 페이지입니다</LastPageMessage>
}

export default IssueListLastPageMessage

const LastPageMessage = styled.div`
  ${({ theme }) => theme.flex()}
  ${({ theme }) => theme.headerFont}
  padding-bottom: 30px;
`
