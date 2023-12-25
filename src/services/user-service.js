import api from "@/configs/axios";

export default class UserService {
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

    async getAllUsers(id) {
        return await api.get(`${this.prefix}/list/${id}`)
    }

    async updateSimple(id, request) {
        return await api.put(`${this.prefix}/update/${id}`, request)
    }

    async updatePassword(id, request) {
        return await api.put(`${this.prefix}/updatePassword/${id}`, request)
    }
    async updateBalance(id, value) {
        return await api.put(`${this.prefix}/updateBalance/${id}/${value}`)
    }

    async updateProfileImage(id, image) {
        return await api.put(`${this.prefix}/updateProfileImage/${id}`, image)
    }
}