export const isAuth = () => {
    let authToken
    if (typeof window !== 'undefined') {
        authToken = localStorage.getItem('authToken')
    }

    let auth = false;
    if (authToken) {
        auth = true
    }

    return auth
}