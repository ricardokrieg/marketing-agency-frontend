import defaultAxios from 'axios'

interface GetAccessTokenOptions {
  audience: string
  scope: string
}

type GetAccessTokenSilentlyFunction = (options: GetAccessTokenOptions) => Promise<string>

const axios = defaultAxios.create({
  baseURL: process.env.REACT_APP_API_MASS_DM_URL,
  headers: {'Content-Type': 'application/json'}
})

export const registerAccessTokenInterceptor = async (getAccessTokenSilently: GetAccessTokenSilentlyFunction) => {
  axios.interceptors.request.use(
    async config => {
      const token = await getAccessTokenSilently({
        audience: process.env.REACT_APP_AUTH0_AUDIENCE || '',
        scope: 'openid profile email',
      })

      return {
        ...config,
        headers: { ...config.headers, Authorization: `Bearer ${token}` },
      }
    },
    error => {
      Promise.reject(error)
    },
  );
}

export default axios
