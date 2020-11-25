import React from 'react'
import useSWR from 'swr'

interface IData {
  [key: string]: any
}

interface IApi {
  data: IData
  isLoading: boolean
  isError: boolean
}

const fetcher = (...args) => fetch(...args).then(res => res.json())

const ApiData: React.FC = (section: string): IApi => {
  const { data, error } = useSWR(`http://localhost:3333/${section}`, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export default ApiData
