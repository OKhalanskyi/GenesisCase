export const ROUTES = {
    root: '/',
    course: (id: string) => (id ? `/${id}` : '/:id'),
}
