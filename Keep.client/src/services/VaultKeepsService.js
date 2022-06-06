import { AppState } from "../AppState";
import { api } from "./AxiosService";

class VaultKeepsService {
  async getKeepsByVault(id) {
    const res = await api.get(`api/vaults/${id}/keeps`)
    console.log(res.data)
    AppState.keeps = res.data
  }
  async create(vkData) {
    const res = await api.post('api/vaultkeeps', vkData)
    console.log(res.data)
    console.log(AppState.keeps.find(k => k.id == vkData.keepId))
    AppState.keeps.push(AppState.keeps.find(k => k.id == vkData.keepId))
  }

  async delete(id) {
    const res = await api.delete('api/vaultkeeps' + id)
    console.log(res.data)
  }
}

export const vaultKeepsService = new VaultKeepsService();