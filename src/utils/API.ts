let urlAPI = 'https://png-backend.onrender.com'
// if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
if (process && process.env.NODE_ENV === 'development') {
        urlAPI = 'http://localhost:8888'
}

export { urlAPI }