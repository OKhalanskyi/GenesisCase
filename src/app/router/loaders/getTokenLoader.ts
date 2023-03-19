import { store } from '../../../app/store/store'
import { courseApi } from '../../../app/store/api/course.api'
import { authApi } from '../../../app/store/api/token.api'

export const getTokenLoader = async () => {
    if (localStorage.getItem('token')) {
        return null
    }
    const data = await store.dispatch(authApi.endpoints.getToken.initiate())
    localStorage.setItem('token', data?.data?.token ? data.data.token : '')
    return data
}
