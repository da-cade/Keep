import { AppState } from "../AppState";
import { api } from "./AxiosService";

class ProfilesService {
  async getProfile(id) {
    const res = await api.get('api/profiles/' + id)
    AppState.activeProfile = res.data
  }
  async getKeepsByProfile(id) {
    const res = await api.get(`api/profiles/${id}/keeps`)
    AppState.profileKeeps = res.data
  }
  async getVaultsByProfile(id) {
    const res = await api.get(`api/profiles/${id}/vaults`)
    AppState.vaults = res.data
  }
  async getVaultkeepsByProfile(id) {
    const res = await api.get(`api/profiles/${id}/vaultkeeps`)
    AppState.vaultkeeps = res.data
  }
}

export const profilesService = new ProfilesService();