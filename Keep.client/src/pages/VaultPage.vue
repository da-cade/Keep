<template>
  <div class="container-fluid">
    <br />
    <div class="row">
      <div class="col-12">
        <div class="m-4">
          <div class="d-flex justify-content-between">
            <h2>{{ vault.name }}</h2>
            <button
              v-if="authenticated"
              class="btn btn-danger"
              @click.stop="deleteVault(vault.id)"
              title="Delete this Vault"
            >
              Delete Vault
            </button>
          </div>
          <h6 class="ms-1">Keeps: {{ keepCount }}</h6>
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-12 ms-0 d-flex flex-column align-items-center">
        <Keepfeed :keeps="keeps" class="m-4" />
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted, ref, watch, watchEffect } from "@vue/runtime-core"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { vaultKeepsService } from "../services/VaultKeepsService"
import { useRoute, useRouter } from "vue-router"
import { AppState } from "../AppState"
import { vaultsService } from "../services/VaultsService"
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const showModal = ref()
    onMounted(async () => {
      try {
        await vaultsService.getVault(route.params.id)
        await vaultKeepsService.getKeepsByVault(route.params.id)
      } catch (error) {
        router.push({ name: 'Home' })
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      showModal,
      keeps: computed(() => AppState.keeps),
      vault: computed(() => AppState.activeVault),
      keepCount: computed(() => AppState.keeps.length),
      authenticated: computed(() => {
        return AppState.account.id == AppState.activeVault.creatorId
      }),
      async deleteVault(id) {
        try {
          if (await Pop.confirm()) {
            await vaultsService.deleteVault(id)
            router.push({ name: 'ProfilePage', params: { id: AppState.account.id } })
          }
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>