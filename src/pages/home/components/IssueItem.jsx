import React from 'react'
import styled from 'styled-components'

const IssueItem = ({ data }) => {
  return (
    <IssueItemWrapper>
      <IssueMain>
        <IssueTitle>issue title</IssueTitle>
        <IssueSubTitle>작성자:,작성일:</IssueSubTitle>
      </IssueMain>
      <IssueComment>코멘트:67</IssueComment>
    </IssueItemWrapper>
  )
}

export default IssueItem

const IssueItemWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`

const IssueMain = styled.div`
  ${({ theme }) => theme.flex('column', 'space-evenly', 'flex-start')}
  flex: 8;
  width: 100%;
`

const IssueTitle = styled.p`
  ${({ theme }) => theme.titleFont}
`

const IssueSubTitle = styled.p`
  ${({ theme }) => theme.normalFont}
`

const IssueComment = styled.div`
  ${({ theme }) => theme.flex()}
  flex: 2;
  width: 100%;
`
