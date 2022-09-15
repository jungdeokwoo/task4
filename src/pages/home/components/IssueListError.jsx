import React, { useContext } from 'react'
import styled from 'styled-components'
import { GithubContext } from 'context/GithubContext'

const IssueListError = () => {
  const { isError } = useContext(GithubContext)

  return isError && <ErrorMessage>{isError}</ErrorMessage>
}

export default IssueListError

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
