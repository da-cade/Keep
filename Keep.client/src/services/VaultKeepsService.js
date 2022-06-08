import { AppState } from "../AppState";
import { api } from "./AxiosService";

class VaultKeepsService {
  async getKeepsByVault(id) {
    const res = await api.get(`api/vaults/${id}/keeps`)
    AppState.keeps = res.data
  }

  async create(vkData) {
    const res = await api.post('api/vaultkeeps', vkData)
    AppState.keeps.unshift(AppState.keeps.find(k => k.id == vkData.keepId))
    AppState.vaultkeeps.unshift(res.data)
  }

  async delete(id) {
    await api.delete('api/vaultkeeps/' + id)
    AppState.vaultkeeps = AppState.vaultkeeps.filter(vk => vk.id != id)
  }
}

export const vaultKeepsService = new VaultKeepsService();