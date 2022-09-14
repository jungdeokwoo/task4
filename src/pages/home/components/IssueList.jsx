import React from 'react'
import IssueItem from './IssueItem'

const IssueList = () => {
  const issueLists = [1, 2, 3]
  return issueLists.map(issueList => <IssueItem data={issueList} />)
}

export default IssueList
