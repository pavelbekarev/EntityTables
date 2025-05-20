import { api } from '@/shared/api/axiosInstance'

/**
 * 
 * @param endpoint - путь, по которому отправлять запрос (/user/create)
 * @param data - данные к отправке на сервер
 * 
 * @returns 
 */
export const signInAsync = async (config) => {
  const { endpoint, data } = config;

  return await api.post(endpoint, data)
}
