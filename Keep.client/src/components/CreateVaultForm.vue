<template>
  <div class="formContent p-1">
    <form id="newVaultForm" @submit.prevent="createVault">
      <div class="d-flex justify-content-between my-2">
        <label class="visually-hidden form-label" for="">Name</label>
        <input
          v-model="formData.name"
          class="form-control"
          type="text"
          placeholder="Name..."
        />
      </div>
      <div class="d-flex justify-content-between my-2">
        <label class="visually-hidden form-label" for="">Description</label>
        <textarea
          v-model="formData.description"
          class="form-control"
          placeholder="Description..."
          type="text"
        />
      </div>
      <div class="form-check my-2">
        <input
          v-model="formData.isPrivate"
          class="form-check-input"
          type="checkbox"
          value=""
          id=""
        />
        <label class="form-check-label" for=""> Make it Private? </label>
      </div>
    </form>
  </div>
  <div class="d-flex justify-content-end">
    <button class="btn btn-success" type="submit" form="newVaultForm">
      Create
    </button>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import { Modal } from "bootstrap"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { AppState } from "../AppState"
import { vaultsService } from "../services/VaultsService"
export default {
  setup() {
    const formData = ref({ isPrivate: false })
    return {
      formData,
      async createVault() {
        try {
          formData.creatorId = AppState.account.id
          const vaultId = await vaultsService.createVault(formData.value, "myVaults")
          formData.value = {}
          Modal.getOrCreateInstance(document.getElementById('newVaultModal')).hide()
          // addToVault(vaultId)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async addToVault(vaultId) {
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
    }
  }
}
</script>


<style lang="scss" scoped>
textarea {
  min-height: 15vh;
  min-width: 40vw;
}
</style>