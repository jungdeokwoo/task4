import React, { useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'
import IssueItem from './IssueItem'
import { GithubContext } from 'context/GithubContext'
import Loading from 'components/Loading'

const IssueList = () => {
  const { issueLists, isLoading, getLists, isError, currentPage } = useContext(GithubContext)
  const observerTarget = useRef(null)

  useEffect(() => {
    if (currentPage.current === 'lastPage' || isError) return
    const bottomWindow = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          getLists()
        }
      },
      { threshold: 0.7 },
    )
    observerTarget.current && bottomWindow.observe(observerTarget.current)
  })

  return (
    <>
      {issueLists.map((issueList, index) => (
        <IssueItemContainer key={index}>
          <IssueItem
            id={issueList.id}
            title={issueList.title}
            number={issueList.number}
            created={issueList.created_at.split('T')[0]}
            user={issueList.user.login}
            comments={issueList.comments}
          />
        </IssueItemContainer>
      ))}
      {isLoading ? <Loading /> : <InfinityScrollDiv ref={observerTarget} />}
      {isError && <ErrorMessage>{isError}</ErrorMessage>}
      {currentPage.current === 'lastPage' && <LastPageMessage>마지막 페이지입니다</LastPageMessage>}
    </>
  )
}

export default IssueList

const InfinityScrollDiv = styled.div`
  width: 100%;
  height: 50px;
`

const IssueItemContainer = styled.div``

const ErrorMessage = styled.div`
  position: fixed;
  ${({ theme }) => theme.flex()};
  top: 100px;
  left: 50%;
  width: max-content;
  padding: 20px;
  ${({ theme }) => theme.headerFont}
  background-color: red;
  color: white;
  transform: translateX(-50%);
`

const LastPageMessage = styled.div`
  ${({ theme }) => theme.flex()}
  ${({ theme }) => theme.headerFont}
  padding-bottom: 30px;
`
