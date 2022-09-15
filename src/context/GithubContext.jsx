import { createContext, useEffect, useState } from 'react'
import getIssueLists from 'api'

export const GithubContext = createContext(null)

const IssueProvider = ({ children }) => {
  const [issueLists, setIssueLists] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState('')
  const [isLastPage, setIsLastPage] = useState(false)

  useEffect(() => {
    const errorTimer = setTimeout(() => {
      setIsError('')
    }, 3000)
    return () => clearTimeout(errorTimer)
  }, [isError])

  const getLists = async nextPage => {
    setIsLoading(true)
    try {
      const response = await getIssueLists(nextPage)
      if (response.data.length === 0) {
        setIsLastPage(true)
        return
      }
      setIssueLists(prev => [...prev, ...response.data])
    } catch (error) {
      setIsError('네트워크가 불안정합니다 다시 시도해주세요')
      setIsLastPage(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <GithubContext.Provider value={{ issueLists, getLists, isLoading, isError, isLastPage }}>
      {children}
    </GithubContext.Provider>
  )
}

export default IssueProvider
