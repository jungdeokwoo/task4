import React, { useRef } from 'react'
import styled from 'styled-components'
import IssueList from './components/IssueList'
import IssueListLoading from './components/IssueListLoading'
import IssueListError from './components/IssueListError'
import IssueListLastPageMessage from './components/IssueListLastPageMessage'

const Issue = () => {
  const currentPage = useRef(1)

  return (
    <IssueContainer>
      <IssueList currentPage={currentPage} />
      <IssueListLoading />
      <IssueListError />
      <IssueListLastPageMessage />
    </IssueContainer>
  )
}

export default Issue

const IssueContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  padding: 0 30px;
`
