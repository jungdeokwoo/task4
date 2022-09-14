import React, { useContext } from 'react'
import IssueItem from './IssueItem'
import { GithubContext } from 'context/GithubContext'

const IssueList = () => {
  const IssueLists = useContext(GithubContext)

  const issueLists = [1, 2, 3]
  return issueLists.map((issueList, index) => <IssueItem key={index} data={issueList} />)
}

export default IssueList
