import React from 'react'
import styled from 'styled-components'
import IssueList from './components/IssueList'

const Issue = () => {
  return (
    <IssueContainer>
      <IssueList></IssueList>
    </IssueContainer>
  )
}

export default Issue

const IssueContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  padding: 0 30px;
`
