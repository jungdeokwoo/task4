import axios from 'axios'

const basicAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Token ${process.env.REACT_APP_GITHUB_KEY}`,
    'Content-type': 'application/json',
  },
})

const getIssueLists = async currentPage => {
  return await basicAxios.get('', { params: { sort: 'comments', page: currentPage } })
}

export default getIssueLists
