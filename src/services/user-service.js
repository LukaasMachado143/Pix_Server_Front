import api from "@/configs/axios";

export default class BuffetService {
    prefix = "user"
    async createUser(request) {
        return await api.post(`${this.prefix}/create`, request)
    }

    async login(request) {
        return await api.post(`${this.prefix}/login`, request)
    }

    async getUser(email) {
        return await api.get(`${this.prefix}/${email}`)
    }
}