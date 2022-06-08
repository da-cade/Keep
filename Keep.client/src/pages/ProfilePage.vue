
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="d-flex">
          <img
            class="profilePic m-2"
            :src="profile.picture"
            alt="profile picture"
          />
          <div class="d-flex flex-column ms-3 profileInfo">
            <h1>{{ profile.name }}</h1>
            <h4>Vaults: {{ vaultCount }}</h4>
            <h4>Keeps: {{ keepCount }}</h4>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="row p-2 pe-0">
      <div class="d-flex align-items-center">
        <h2 class="mx-4">Vaults</h2>
        <i
          v-if="authenticated"
          class="mdi mdi-plus text-kpr-green selectable"
          data-bs-toggle="modal"
          data-bs-target="#newVaultModal"
          title="Create Vault"
        ></i>
      </div>
      <div
        class="col-md-2 col-xs-4"
        v-for="v in vaults"
        :key="v.id"
        @click.stop="goToVaultPage(v)"
      >
        <div class="vaultContent selectable d-flex align-items-end m-2">
          <img
            v-if="v.coverImg"
            :src="v.coverImg"
            class="vaultImg img-fluid selectable"
            alt="vault cover image"
          />
          <svg
            v-else
            class="mb-1 ms-1"
            width="60"
            height="69"
            viewBox="0 0 57 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.353 13.5144V58.2019H10.5718V13.5144H16.353ZM47.7905 13.5144L27.6655 34.6082L48.228 58.2019H40.1968L21.978 36.7019V33.2019L40.478 13.5144H47.7905Z"
              fill="#636E72"
            />
            <path
              d="M16.353 13.5144H17.353V12.5144H16.353V13.5144ZM16.353 58.2019V59.2019H17.353V58.2019H16.353ZM10.5718 58.2019H9.57178V59.2019H10.5718V58.2019ZM10.5718 13.5144V12.5144H9.57178V13.5144H10.5718ZM47.7905 13.5144L48.5141 14.2047L50.1267 12.5144H47.7905V13.5144ZM27.6655 34.6082L26.942 33.9179L26.3125 34.5777L26.9117 35.2652L27.6655 34.6082ZM48.228 58.2019V59.2019H50.426L48.9819 57.5449L48.228 58.2019ZM40.1968 58.2019L39.4339 58.8484L39.7334 59.2019H40.1968V58.2019ZM21.978 36.7019H20.978V37.0686L21.2151 37.3484L21.978 36.7019ZM21.978 33.2019L21.2493 32.5171L20.978 32.8058V33.2019H21.978ZM40.478 13.5144V12.5144H40.0455L39.7493 12.8296L40.478 13.5144ZM15.353 13.5144V58.2019H17.353V13.5144H15.353ZM16.353 57.2019H10.5718V59.2019H16.353V57.2019ZM11.5718 58.2019V13.5144H9.57178V58.2019H11.5718ZM10.5718 14.5144H16.353V12.5144H10.5718V14.5144ZM47.067 12.8241L26.942 33.9179L28.3891 35.2985L48.5141 14.2047L47.067 12.8241ZM26.9117 35.2652L47.4742 58.8589L48.9819 57.5449L28.4194 33.9511L26.9117 35.2652ZM48.228 57.2019H40.1968V59.2019H48.228V57.2019ZM40.9597 57.5554L22.741 36.0554L21.2151 37.3484L39.4339 58.8484L40.9597 57.5554ZM22.978 36.7019V33.2019H20.978V36.7019H22.978ZM22.7068 33.8867L41.2068 14.1992L39.7493 12.8296L21.2493 32.5171L22.7068 33.8867ZM40.478 14.5144H47.7905V12.5144H40.478V14.5144Z"
              fill="#636E72"
            />
            <rect
              x="2"
              y="2.2019"
              width="52.537"
              height="64.7981"
              stroke="#636E72"
              stroke-width="4"
            />
          </svg>
          <div
            class="
              vaultInfo
              d-flex
              w-100
              justify-content-between
              align-items-end
            "
          >
            <h6 class="ms-auto text-light ps-1">
              {{ v.name }}
            </h6>
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
            v-if="authenticated"
            class="mdi mdi-plus text-kpr-green selectable"
            data-bs-toggle="modal"
            data-bs-target="#newKeepModal"
            title="Create Keep"
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
        title="Submit New Vault"
        @submit.prevent="createVault"
      >
        Create
      </button>
      <button
        class="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#newVaultModal"
        title="Close Form"
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
import { computed, onMounted, ref, watchEffect } from "@vue/runtime-core"
import Pop from "../utils/Pop"
import { profilesService } from "../services/ProfilesService"
import { logger } from "../utils/Logger"
import { useRoute, useRouter } from "vue-router"
import { AppState } from "../AppState"
import { accountService } from "../services/AccountService"
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const loaded = ref(false)
    // watchEffect(() => {
    //   if (AppState.vaultkeeps.length) {
    //     AppState.vaultkeeps.forEach(vk => {
    //       const foundKeep = AppState.keeps.find(k => k.id == vk.keepId)
    //       const foundVault = AppState.vaults.find(v => v.id = vk.vaultId)
    //       console.log(foundVault.id, foundKeep.id)
    //       foundVault.coverImg = foundKeep.img
    //       const index = AppState.vaults.findIndex(v => v.id === foundVault.id)
    //       console.log('index', index)
    //       // AppState.vaults.splice(index, 1, foundVault)
    //       // AppState.vaults = AppState.vaults
    //     })
    //   }
    // })
    watchEffect(async () => {
      try {
        if (route.name == 'ProfilePage') {
          await profilesService.getKeepsByProfile(route.params.id)
          await profilesService.getProfile(route.params.id)
          if (route.params.id != AppState.account.id) {
            await profilesService.getVaultsByProfile(route.params.id)
          } else {
            await accountService.getMyVaults()
          }
          await profilesService.getVaultkeepsByProfile(route.params.id)
        }
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
      loaded.value = true
    })
    return {
      route,
      router,
      vaults: computed(() => {
        if (AppState.account.id == route.params.id) {
          return AppState.myVaults
        } else {
          return AppState.vaults
        }
      }),
      account: computed(() => AppState.account),
      authenticated: computed(() => {
        return AppState.account.id == route.params.id
      }),
      keeps: computed(() => AppState.profileKeeps),
      profile: computed(() => AppState.activeProfile),
      vaultCount: computed(() => AppState.vaults.length),
      keepCount: computed(() => AppState.profileKeeps.length),
      goToVaultPage(vault) {
        AppState.activeVault = vault
        AppState.profileKeeps = []
        router.push({ name: 'VaultPage', params: { id: vault.id } })
      }
    }
  }
}
</script>


<style lang="scss" scoped>
@media screen and (min-width: 568px) {
  i {
    font-size: 24pt;
  }
  .col-12 > div {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    margin-left: 1.5rem;
  }
  .profileInfo {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    margin-left: 1rem;
  }
}
@media screen and (max-width: 568px) {
  .profileInfo {
    padding: 0.5rem;
  }
  .profileInfo > * {
    font-size: larger;
  }
}
svg {
  color: white;
}
.vaultContent {
  position: relative;
  background-color: darken(#8392ab, 20%);
  height: 24vh;
  border-radius: 4px;
  box-shadow: 2.6px 2.6px 10px rgba(0, 0, 0, 0.035),
    21px 21px 80px rgba(0, 0, 0, 0.07);
}
.profilePic {
  border-radius: 3px;
  width: 13vw;
}

.vaultImg {
  max-height: 30vh;
}

.vaultInfo {
  position: absolute;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  bottom: 0;
  left: 0;
  padding: 0.25rem;
  z-index: 2;
  h6:hover {
    cursor: pointer;
  }
  background-color: rgba(0 0 0 / 23%);
  box-shadow: 0px -9.2px 9.1px 0px rgba(0 0 0 / 17%),
    0px -22px 21.8px 0px rgba(0 0 0 / 8%);
}
</style>