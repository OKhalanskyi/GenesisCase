import { courseApi } from 'app/store/api/course.api'
import { store } from 'app/store/store'

export const getAllCoursesLoader = async () => {
    return await store.dispatch(courseApi.endpoints.getAllCourses.initiate())
}
