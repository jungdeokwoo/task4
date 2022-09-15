import { createContext, useEffect, useRef, useState } from 'react'
import getIssueLists from 'api'

export const GithubContext = createContext(null)

const IssueProvider = ({ children }) => {
  const [issueLists, setIssueLists] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState('')
  const currentPage = useRef(1)

  useEffect(() => {
    const errorTimer = setTimeout(() => {
      setIsError('')
    }, 3000)
    return () => clearTimeout(errorTimer)
  }, [isError])

  const getLists = async () => {
    setIsLoading(true)
    try {
      const response = await getIssueLists(currentPage.current)
      if (response.data.length === 0) {
        currentPage.current = 'lastPage'
        setIsLoading(false)
        return
      }
      setIsLoading(false)
      setIssueLists(prev => [...prev, ...response.data])
      currentPage.current++
    } catch (error) {
      setIsError('네트워크가 불안정합니다 다시 시도해주세요')
      currentPage.current = 'errorPage'
    }
  }

  return (
    <GithubContext.Provider value={{ issueLists, currentPage, getLists, isLoading, isError }}>
      {children}
    </GithubContext.Provider>
  )
}

export default IssueProvider
