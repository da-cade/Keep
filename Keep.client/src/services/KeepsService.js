import { AppState } from "../AppState";
import { api } from "./AxiosService";

class KeepsService {
  async getAllKeeps() {
    const res = await api.get('api/keeps')
    console.log(res.data)
    AppState.keeps = res.data
  }
  async getKeep(id) {
    const res = await api.get(`api/keeps/${id}`)
    console.log(res.data)
    AppState.activeKeep = res.data;
  }
  async createKeep(keepData) {
    const res = await api.post('api/keeps', keepData)
    console.log(res.data)
    AppState.keeps.unshift(res.data)
  }
  async editKeep(update) {
    const res = await api.put(`api/keeps/${update.id}`, update)
    console.log(res.data)
    const index = AppState.keeps.findIndex(k => k.id == update.id)
    AppState.keeps = AppState.keeps.splice(index, 1, res.data)
  }
  async deleteKeep(id) {
    const res = await api.delete(`api/keeps/${id}`)
    console.log(res.data)
    AppState.keeps = AppState.keeps.filter(k => k.id != id)
  }
}

export const keepsService = new KeepsService();