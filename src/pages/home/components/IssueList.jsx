import React, { useContext } from 'react'
import styled from 'styled-components'
import IssueItem from './IssueItem'
import { GithubContext } from 'context/GithubContext'
import useIntersection from 'hook/useIntersection'

const IssueList = ({ currentPage, setCurrentPage }) => {
  const { issueLists, isLoading, getLists, isLastPage, isError } = useContext(GithubContext)

  const observeElement = useIntersection(() => {
    if (isLastPage || isError) return
    getLists(currentPage)
    setCurrentPage(prev => prev + 1)
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
      {!isLoading && <InfinityScrollDiv ref={observeElement} />}
    </>
  )
}

export default IssueList

const InfinityScrollDiv = styled.div`
  width: 100%;
  height: 50px;
`

const IssueItemContainer = styled.div``
