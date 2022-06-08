<template>
  <div class="formContent p-1">
    <form @submit.prevent="createKeep" id="newKeepForm">
      <div class="d-flex justify-content-between my-2">
        <label class="visually-hidden form-label" for="">Name</label>
        <input
          class="form-control"
          v-model="formData.name"
          type="text"
          placeholder="Name..."
          required
          maxlength="30"
        />
      </div>
      <div class="d-flex justify-content-between my-2">
        <label class="visually-hidden form-label" for="">Image</label>
        <input
          class="form-control"
          v-model="formData.img"
          type="text"
          placeholder="Add an Image..."
          required
          maxlength="400"
        />
      </div>
      <div class="d-flex justify-content-between my-2">
        <label class="visually-hidden form-label" for="">Description</label>
        <textarea
          class="form-control"
          v-model="formData.description"
          placeholder="Description..."
          type="text"
          required
          maxlength="500"
        />
      </div>
      <div class="d-flex justify-content-between my-2">
        <label class="visually-hidden form-label" for="">Tags</label>
        <input type="text" class="form-control" placeholder="Tags..." />
      </div>
    </form>
  </div>

  <div class="d-flex justify-content-end">
    <button class="btn btn-success" type="submit" form="newKeepForm">
      Create
    </button>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import { keepsService } from "../services/KeepsService"
import { Modal } from "bootstrap"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { AppState } from "../AppState"
export default {
  setup() {
    const formData = ref({})
    return {
      formData,
      async createKeep() {
        try {
          formData.creatorId = AppState.account.id
          formData.views = 1
          formData.kept = 0
          formData.shares = 0
          await keepsService.createKeep(formData.value)
          formData.value = {}
          Modal.getOrCreateInstance(document.getElementById('newKeepModal')).hide()
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
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