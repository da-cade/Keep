import { AppState } from "../AppState";
import { api } from "./AxiosService";

class KeepsService {
  async getAllKeeps() {
    const res = await api.get('api/keeps')
    AppState.keeps = res.data
  }
  async getKeep(id) {
    const res = await api.get(`api/keeps/${id}`)
    AppState.activeKeep = res.data;
  }
  async createKeep(keepData) {
    const res = await api.post('api/keeps', keepData)
    AppState.keeps.unshift(res.data)
    AppState.profileKeeps.unshift(res.data)
  }
  async editKeep(update) {
    const res = await api.put(`api/keeps/${update.id}`, update)
    const index = AppState.keeps.findIndex(k => k.id == update.id)
    AppState.keeps = AppState.keeps.splice(index, 1, res.data)
  }
  async deleteKeep(id) {
    await api.delete(`api/keeps/${id}`)
    AppState.keeps = AppState.keeps.filter(k => k.id != id)
  }
}

export const keepsService = new KeepsService();