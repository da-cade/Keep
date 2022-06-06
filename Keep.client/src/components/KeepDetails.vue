<template>
  <div class="row">
    <div class="col-md-6 pe-0 keepDetails">
      <div class="h-100 p-3">
        <img :src="keep.img" class="keepImg img-fluid rounded" alt="" />
      </div>
    </div>
    <div class="col-md-6 ps-0 keepDetails">
      <div
        class="
          keepDetails
          d-flex
          flex-column
          align-items-center
          justify-content-between
          p-3
        "
      >
        <div class="d-flex">
          <div>
            <i class="mdi mdi-eye me-1"></i
            ><span class="me-2">{{ keep.views }}</span>
          </div>
          <div>
            <svg
              class="me-1"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.42676 5.22461V15H6.16211V5.22461H7.42676ZM14.3037 5.22461L9.90137 9.83887L14.3994 15H12.6426L8.65723 10.2969V9.53125L12.7041 5.22461H14.3037Z"
                fill="#55EFC4"
              />
              <!-- woowee that's a big boy -->
              <path
                d="M7.42676 5.22461H8.42676V4.22461H7.42676V5.22461ZM7.42676 15V16H8.42676V15H7.42676ZM6.16211 15H5.16211V16H6.16211V15ZM6.16211 5.22461V4.22461H5.16211V5.22461H6.16211ZM14.3037 5.22461L15.0272 5.91491L16.6399 4.22461H14.3037V5.22461ZM9.90137 9.83887L9.17784 9.14857L8.54832 9.80839L9.14749 10.4959L9.90137 9.83887ZM14.3994 15V16H16.5974L15.1533 14.343L14.3994 15ZM12.6426 15L11.8797 15.6465L12.1792 16H12.6426V15ZM8.65723 10.2969H7.65723V10.6636L7.8943 10.9434L8.65723 10.2969ZM8.65723 9.53125L7.92848 8.84646L7.65723 9.13513V9.53125H8.65723ZM12.7041 5.22461V4.22461H12.2716L11.9754 4.53982L12.7041 5.22461ZM6.42676 5.22461V15H8.42676V5.22461H6.42676ZM7.42676 14H6.16211V16H7.42676V14ZM7.16211 15V5.22461H5.16211V15H7.16211ZM6.16211 6.22461H7.42676V4.22461H6.16211V6.22461ZM13.5802 4.53431L9.17784 9.14857L10.6249 10.5292L15.0272 5.91491L13.5802 4.53431ZM9.14749 10.4959L13.6455 15.657L15.1533 14.343L10.6552 9.18185L9.14749 10.4959ZM14.3994 14H12.6426V16H14.3994V14ZM13.4055 14.3535L9.42015 9.65039L7.8943 10.9434L11.8797 15.6465L13.4055 14.3535ZM9.65723 10.2969V9.53125H7.65723V10.2969H9.65723ZM9.38597 10.216L13.4328 5.9094L11.9754 4.53982L7.92848 8.84646L9.38597 10.216ZM12.7041 6.22461H14.3037V4.22461H12.7041V6.22461Z"
                fill="#55EFC4"
              />
              <rect
                x="1"
                y="1"
                width="18"
                height="18"
                stroke="#55EFC4"
                stroke-width="2"
              />
            </svg>

            <span class="me-2">{{ keep.kept }}</span>
          </div>
          <div>
            <i class="mdi mdi-share-variant me-1"></i>
            <span class="">{{ keep.shares }} </span>
          </div>
        </div>
        <div class="d-flex flex-column align-items-center text-center w-100">
          <h1>{{ keep.name }}</h1>
          <h5>{{ keep.description }}</h5>
          <hr class="w-75" />
        </div>
        <div
          class="d-flex w-100 buttonRow justify-content-between"
          v-show="account.id"
        >
          <select v-model="selected">
            <option disabled value="">Add to Vault</option>
            <!-- REVIEW <option
              data-bs-toggle="modal"
              :data-bs-target="'#newVaultModal-' + keep.id"
            >
              New Vault
            </option> -->
            <option v-for="v in myVaults" :key="v" :value="v.id">
              {{ v.name }}
            </option>
          </select>
          <i
            class="mdi mdi-delete selectable rounded mt-auto"
            v-if="authenticated"
            @click.stop="deleteKeep()"
          ></i>
          <Login class="slim" />
        </div>
      </div>
    </div>
  </div>

  <FormModal :id="'newVaultModal-' + keep.id">
    <template #modal-title-slot>
      <h2>Create a New Vault</h2>
    </template>
    <template #modal-body-slot>
      <CreateVaultForm :keep="keep" />
    </template>
  </FormModal>
</template>


<script>
import { computed, ref, watchEffect } from "@vue/runtime-core"
import { useRoute } from "vue-router"
import { AppState } from "../AppState"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { vaultKeepsService } from "../services/VaultKeepsService"
import { vaultsService } from "../services/VaultsService"
import { Modal } from "bootstrap"
import { keepsService } from "../services/KeepsService"
export default {
  props: {
    keep: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    const selected = ref()

    async function addToVault(vaultId) {
      try {
        let vkData = {}
        vkData.creatorId = AppState.account.id
        vkData.vaultId = vaultId
        vkData.keepId = props.keep.id
        await vaultKeepsService.create(vkData)
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    }
    //TODO can create a watchEffect which filters if the keep is already inside a vault
    watchEffect(() => {
      if (selected.value) {
        if (selected.value == 'New Vault') {
          selected.value = {}
        } else {
          addToVault(selected.value)
        }
      }
    })
    return {
      selected,
      account: computed(() => AppState.account),
      authenticated: computed(() => AppState.account.id == props.keep.creatorId),
      myVaults: computed(() => AppState.myVaults),
      async deleteKeep() {
        try {
          await keepsService.deleteKeep(props.keep.id)
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
@import "src/assets/scss/_variables.scss";
i {
  color: $keepr-green;
}
.col {
  max-height: 100%;
}
.keepContent {
  height: 80vh;
}
.keepDetails {
  height: 80vh;
}
.keepImg {
  object-fit: cover;
  height: 100%;
  width: auto;
}
.buttonRow {
  height: 3rem;
  i {
    font-size: 28pt;
  }
}
.slim {
  height: 3rem;
}
</style>