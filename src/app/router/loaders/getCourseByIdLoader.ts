import { courseApi } from '../../../app/store/api/course.api'
import { store } from '../../../app/store/store'

export const getCourseByIdLoader = async (id: string) => {
    return await store.dispatch(courseApi.endpoints.getCourseById.initiate(id))
}
