import axios from "axios";
import store from "@/store/index"

const baseURL = process.env.VUE_APP_BACK_API

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