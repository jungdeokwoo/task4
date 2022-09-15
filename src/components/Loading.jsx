import React from 'react'
import styled from 'styled-components'

export default function Loading() {
  return (
    <IssueItemWrapper>
      <IssueMain>
        <IssueTitle />
        <IssueSubTitle />
      </IssueMain>
      <IssueComment />
    </IssueItemWrapper>
  )
}

const IssueItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  cursor: pointer;
`

const IssueMain = styled.div`
  ${({ theme }) => theme.flex('column', 'space-evenly', 'flex-start')}
  width: 80%;
`

const IssueTitle = styled.p`
  width: 80%;
  height: 30px;
  background-color: #aeaeae;
`

const IssueSubTitle = styled.p`
  background-color: #aeaeae;
  width: 80%;
  height: 30px;
`

const IssueComment = styled.div``
