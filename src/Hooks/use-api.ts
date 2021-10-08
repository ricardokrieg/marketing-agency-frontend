import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

interface IOptions {
  audience?: string,
  scope?: string,
  headers?: any,
}

interface IState {
  error: any,
  loading: boolean,
  data: any,
}

export const useApi = (url: string, options: IOptions = {}) => {
  const { getAccessTokenSilently } = useAuth0()
  const [state, setState] = useState({
    error: null,
    loading: true,
    data: null,
  })
  const [refreshIndex, setRefreshIndex] = useState(0)

  useEffect(() => {
    (async () => {
      try {
        const { audience, scope, ...fetchOptions } = options
        const accessToken = await getAccessTokenSilently({ audience, scope })

        const res = await fetch(url, {
          ...fetchOptions,
          headers: {
            ...fetchOptions.headers,
            Authorization: `Bearer ${accessToken}`,
          },
        })

        setState({
          ...state,
          data: await res.json(),
          error: null,
          loading: false,
        })
      } catch (error) {
        console.log('error')
        console.error(error)

        const stateValue: IState = {
          ...state,
          error,
          loading: false,
        }

        setState(stateValue)
      }
    })()
  }, [refreshIndex]);

  return {
    ...state,
    refresh: () => setRefreshIndex(refreshIndex + 1),
  }
}
