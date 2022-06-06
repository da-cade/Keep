
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="d-flex my-5 mx-4">
          <img :src="profile.picture" alt="" class="m-2" />
          <div class="ms-3">
            <h1>{{ profile.name }}</h1>
            <h4>Vaults: {{ vaultCount }}</h4>
            <h4>Keeps: {{ keepCount }}</h4>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="d-flex align-items-center ms-4">
        <h2 class="me-2">Vaults</h2>
        <i
          class="mdi mdi-plus text-kpr-green selectable"
          data-bs-toggle="modal"
          data-bs-target="#newVaultModal"
        ></i>
      </div>
      <div
        class="col-2"
        v-for="v in vaults"
        :key="v.id"
        @click.stop="goToVaultPage(v)"
      >
        <div class="vaultContent d-flex align-items-end">
          <!-- TODO most recent image in vault -->
          <!-- <img :src="v.img" class="img-fluid vaultImg selectable" alt="" /> -->
          <div
            class="
              vaultInfo
              d-flex
              w-100
              justify-content-between
              align-items-end
            "
          >
            <h5 class="text-light ps-1">
              {{ v.name }}
            </h5>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-12">
        <div class="d-flex align-items-center ms-4">
          <h2 class="me-2">Keeps</h2>
          <i
            class="mdi mdi-plus text-kpr-green selectable"
            data-bs-toggle="modal"
            data-bs-target="#newKeepModal"
          ></i>
        </div>
        <Keepfeed :keeps="keeps" />
      </div>
    </div>
  </div>

  <FormModal id="newVaultModal">
    <template #modal-header-slot>
      <h3>Create a New Vault</h3>
    </template>
    <template #modal-body-slot>
      <CreateVaultForm />
    </template>
    <div class="d-flex justify-content-around">
      <button
        class="btn btn-success"
        type="submit"
        @submit.prevent="createVault"
      >
        Create
      </button>
      <button
        class="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#newVaultModal"
      >
        Close
      </button>
    </div>
  </FormModal>

  <FormModal id="newKeepModal">
    <template #modal-header-slot>
      <h2>Create a New Keep</h2>
    </template>
    <template #modal-body-slot>
      <CreateKeepForm />
    </template>
  </FormModal>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core"
import Pop from "../utils/Pop"
import { profilesService } from "../services/ProfilesService"
import { logger } from "../utils/Logger"
import { useRoute, useRouter } from "vue-router"
import { AppState } from "../AppState"
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    onMounted(async () => {
      try {
        await profilesService.getProfile(route.params.id)
        await profilesService.getKeepsByProfile(route.params.id)
        if (route.params.id == AppState.account.id) {
          await profilesService.getVaultsByProfile(route.params.id)
        }
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      route,
      router,
      account: computed(() => AppState.account),
      keeps: computed(() => AppState.keeps),
      profile: computed(() => AppState.activeProfile),
      vaults: computed(() => {
        if (AppState.myVaults.length && (route.params.id != AppState.account.id)) {
          return AppState.vaults
        } else {
          return AppState.myVaults
        }
      }),
      vaultCount: computed(() => AppState.myVaults.length),
      keepCount: computed(() => AppState.keeps.length),
      goToVaultPage(vault) {
        AppState.activeVault = vault
        router.push({ name: 'VaultPage', params: { id: vault.id } })
      }
    }
  }
}
</script>


<style lang="scss" scoped>
i {
  font-size: 24pt;
}
.vaultContent {
  position: relative;
  height: 30vh;
  border-radius: 4px;
}

.vaultInfo {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.25rem;
  z-index: 2;
  h5:hover {
    cursor: pointer;
  }
}
</style>