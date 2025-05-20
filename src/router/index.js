import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import SimplePage from "../components/SimplePage/ui/SimplePage.vue"
import AuthorizationForm from '../components/AuthorizationForm/ui/AuthorizationForm.vue'
import { api } from '@/shared/api/axiosInstance'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: AuthorizationForm,
    },
    {
      path: "/",
      name: "home",
      component: SimplePage
    }
  ],
})

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('access_token')

  if (to.name !== 'auth') {
    console.debug("1")
    
    if (!token) {
      console.error("Token is null")
      return next({ name: 'auth' })
    }

    try {
      // // Проверка токена через /auth/me
      const res = await api.get('/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return next();

    } catch (err) {
      // токен невалиден -> удаляем и перекидываем на логин
      localStorage.removeItem('access_token')
      return next({ name: 'auth' })
    }
  }
  console.debug(to);

  // Если на страницу авторизации — просто пускаем
  return next()
})

export default router
