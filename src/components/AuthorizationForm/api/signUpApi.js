import { api } from '@/shared/api/axiosInstance'

/**
 * API-метод для регистрации пользователя
 * @param endpoint - путь, по которому отправлять запрос (/user/create)
 * @param data - данные к отправке на сервер
 * 
 * @returns 
 */
export const signUpAsync = async (config) => {
  const { endpoint, data } = config;

  return await api.post(endpoint, data)
}
