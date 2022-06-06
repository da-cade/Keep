import { AppState } from "../AppState"
import { api } from "./AxiosService"

class VaultsService {
  async getAllVaults() {
    const res = await api.get('api/vaults')
    console.log(res.data)
    AppState.vaults = res.data
  }
  async getVault(id) {
    const res = await api.get(`api/vaults/${id}`)
    console.log(res.data)
    AppState.activeVault = res.data;
  }
  async createVault(vaultData, passkey) {
    const res = await api.post('api/vaults', vaultData)
    console.log(res.data)
    AppState.vaults.unshift(res.data)
    if (passkey) {
      AppState.myVaults.unshift(res.data)
    }
    return res.data.id
  }
  async editVault(update) {
    const res = await api.put(`api/vaults/${update.id}`, update)
    console.log(res.data)
    const index = AppState.vaults.findIndex(v => v.id == update.id)
    AppState.vaults = AppState.vaults.splice(index, 1, res.data)
  }
  async deleteVault(id) {
    const res = await api.delete(`api/vaults/${id}`)
    console.log(res.data)
    AppState.vaults = AppState.vaults.filter(v => v.id != id)
  }
}

export const vaultsService = new VaultsService();