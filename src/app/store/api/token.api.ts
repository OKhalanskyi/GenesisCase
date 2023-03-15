export interface IToken {
    token: string
}

export const getToken = async () => {
    const data = await fetch(
        import.meta.env.VITE_BASE_URL + import.meta.env.VITE_GET_TOKEN,
    )
    const token: IToken = await data.json()
    localStorage.setItem('token', token.token)
}
//rework later
