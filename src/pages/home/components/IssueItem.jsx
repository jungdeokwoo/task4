import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const IssueItem = ({ id, title, number, created, user, comments }) => {
  const navigate = useNavigate()

  const goDetail = issueId => {
    navigate(`/${issueId}`)
  }

  return (
    <IssueItemWrapper onClick={() => goDetail(id)}>
      <IssueMain>
        <IssueTitle>
          <NumberSpan>{`#${number}`}</NumberSpan>
          {`${title}`}
        </IssueTitle>
        <IssueSubTitle>{`작성자: ${user}, 작성일: ${created}`}</IssueSubTitle>
      </IssueMain>
      <IssueComment>코멘트 :{comments}</IssueComment>
    </IssueItemWrapper>
  )
}

export default IssueItem

const IssueItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  cursor: pointer;

  &:hover {
    background-color: aliceblue;
  }
`

const IssueMain = styled.div`
  ${({ theme }) => theme.flex('column', 'space-evenly', 'flex-start')}
  width: 80%;
`

const NumberSpan = styled.span`
  margin-right: 10px;
  background-color: aqua;
`

const IssueTitle = styled.p`
  ${({ theme }) => theme.titleFont}
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const IssueSubTitle = styled.p`
  ${({ theme }) => theme.normalFont}
`

const IssueComment = styled.div`
  ${({ theme }) => theme.flex()}
  width: 100px;
  white-space: nowrap;
`
