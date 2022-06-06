import { AppState } from "../AppState";
import { api } from "./AxiosService";

class ProfilesService {
  async getProfile(id) {
    const res = await api.get('api/profiles/' + id)
    console.log(res.data)
    AppState.activeProfile = res.data
  }
  async getKeepsByProfile(id) {
    const res = await api.get(`api/profiles/${id}/keeps`)
    console.log(res.data)
    AppState.keeps = res.data
  }
  async getVaultsByProfile(id) {
    const res = await api.get(`api/profiles/${id}/vaults`)
    console.log(res.data)
    AppState.vaults = res.data
  }
}

export const profilesService = new ProfilesService();