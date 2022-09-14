import { createContext, useState } from 'react'

const GithubContext = createContext(null)

const IssueProvider = ({ children }) => {
  const [IssueLists, setIssueLists] = useState([])

  return <GithubContext.Provider value={IssueLists}>{children}</GithubContext.Provider>
}

export default IssueProvider
