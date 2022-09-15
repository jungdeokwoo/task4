import React, { useContext } from 'react'
import { GithubContext } from 'context/GithubContext'
import Loading from 'components/Loading'

const IssueListLoading = () => {
  const { isLoading } = useContext(GithubContext)

  return isLoading && <Loading />
}

export default IssueListLoading
