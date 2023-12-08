import axios from "axios";
function getURL() {
    if (
        window.location.host.includes("192.168.18.22:8080") ||
        window.location.host.includes("localhost:8080") ||
        window.location.host.includes("192.168.18.21:8080")
        ||
        window.location.host.includes("192.168.18.22:8081")
    ) {
        return "http://localhost:3000";
    } else {
        return "https://bricka-dida.vercel.app";
    }
}

const baseURL = getURL();

var api = axios.create({
    baseURL,
});

api.interceptors.request.use(function (config) {
    const auth = JSON.parse(localStorage.getItem("pixServerData"));
    if (auth) config.headers["Authorization"] = "Bearer " + auth.token;
    return config;
});

export default api;