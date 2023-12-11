import api from "@/configs/axios";

export default class TransferService {
    prefix = "transfer"
    async create(request) {
        return await api.post(`${this.prefix}/create`, request)
    }

}