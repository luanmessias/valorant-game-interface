import api from 'src/services/api'
import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json())
function SwrFetchHook<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async url => {
    /* Fetch method: */
    const response = await fetch(url)
    const data = await response.json()
    return data
    /* Axios method (require import the API) */
    // const response = await api.get(url)
    // return response.data
  })

  return { data, error }
}

export default SwrFetchHook
