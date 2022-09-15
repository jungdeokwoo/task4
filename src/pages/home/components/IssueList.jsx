import React, { useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'
import IssueItem from './IssueItem'
import { GithubContext } from 'context/GithubContext'

const IssueList = ({ currentPage }) => {
  const { issueLists, isLoading, getLists, isLastPage, isError } = useContext(GithubContext)
  const observerTarget = useRef(null)

  useEffect(() => {
    if (isLastPage || isError) return
    const bottomWindow = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          getLists(currentPage.current)
          currentPage.current++
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
      {!isLoading && <InfinityScrollDiv ref={observerTarget} />}
    </>
  )
}

export default IssueList

const InfinityScrollDiv = styled.div`
  width: 100%;
  height: 50px;
`

const IssueItemContainer = styled.div``
