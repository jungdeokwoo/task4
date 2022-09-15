import React, { useState } from 'react'
import styled from 'styled-components'
import IssueList from './components/IssueList'
import IssueListLoading from './components/IssueListLoading'
import IssueListError from './components/IssueListError'
import IssueListLastPageMessage from './components/IssueListLastPageMessage'

const Issue = () => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <IssueContainer>
      <IssueList currentPage={currentPage} setCurrentPage={setCurrentPage} />
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
