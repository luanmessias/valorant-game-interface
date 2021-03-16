import useSWR from 'swr'

function SwrFetchHook<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async url => {
    const response = await fetch(url)
    const data = await response.json()
    return data
  })

  return { data, error }
}

export default SwrFetchHook
