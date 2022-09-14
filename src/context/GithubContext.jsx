import { createContext, useEffect, useState } from 'react'
import getIssueLists from 'api'

export const GithubContext = createContext(null)

const IssueProvider = ({ children }) => {
  const [IssueLists, setIssueLists] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getIssueLists(currentPage).then(res => {
      setIssueLists(
        res.data.map(issueList => ({
          id: issueList.id,
          title: issueList.title,
          user: issueList.user.login,
          created: issueList.created_at,
          number: issueList.number,
        })),
      )
    })
  }, [])

  return <GithubContext.Provider value={IssueLists}>{children}</GithubContext.Provider>
}

export default IssueProvider
