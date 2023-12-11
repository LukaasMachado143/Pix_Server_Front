import api from "@/configs/axios";

export default class TransferService {
    prefix = "transfer"
    async create(request) {
        return await api.post(`${this.prefix}/create`, request)
    }

    async getListTrasnfer(type, pixKey) {
        return await api.get(`${this.prefix}/${type}/${pixKey}`)
    }

    async getChartAccumulator(pixKey) {
        return await api.get(`${this.prefix}/chart/accumulator/${pixKey}`)
    }

    async getChartHistory(pixKey) {
        return await api.get(`${this.prefix}/chart/history/${pixKey}`)
    }

}