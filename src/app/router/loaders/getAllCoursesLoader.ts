import { store } from 'app/store/store'
import { courseApi } from 'app/store/api/course.api'
import { getToken } from 'app/store/api/token.api'

export const getAllCoursesLoader = async () => {
    await getToken()
    return await store
        .dispatch(courseApi.endpoints.getAllCourses.initiate())
        .unwrap()
}
