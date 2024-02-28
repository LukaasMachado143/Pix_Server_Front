import axios from "axios";
import store from "@/store/index"
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
        // return "https://pix-server-back.vercel.app/";
        return "http://localhost:3000";

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

api.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response && error.response.status === 401) {
            store.commit('setAuthorized', true)
        }
        return Promise.reject(error);
    }
);

export default api;