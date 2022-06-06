<template>
  <div class="keepContent d-flex align-items-end">
    <img
      :src="keep.img"
      class="img-fluid keepImg selectable"
      @click="goToDetails"
      alt=""
    />
    <div class="keepInfo d-flex w-100 justify-content-between align-items-end">
      <h5 class="text-light ps-1" @click="goToDetails">
        {{ keep.name }}
      </h5>
      <img
        :src="keep.creator?.picture"
        class="userImg rounded-circle"
        @click.stop="goToProfile"
        alt=""
      />
    </div>
  </div>

  <Transition name="modalFade">
    <keep-alive>
      <Modal
        v-if="showModal"
        :id="'keepdetails-' + keep.id"
        :showModal="showModal"
      >
        <template #modal-content-slot>
          <router-view :keep="keep" />
        </template>
      </Modal>
    </keep-alive>
  </Transition>
</template>


<script>
import { ref, watchEffect } from "@vue/runtime-core"
import { keepsService } from "../services/KeepsService"
import { useRoute, useRouter } from "vue-router"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { Modal } from "bootstrap"
export default {
  props: {
    keep: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    const showModal = ref(false)
    watchEffect(async () => {
      if (route.params.keepId == props.keep.id) {
        showModal.value = true
        try {
          await keepsService.getKeep(route.params.keepId)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
      if (route.name == 'Home') {
        showModal.value = false
        AppState.activeKeep = {};
      }
    })
    return {
      showModal,
      goToDetails() {
        router.push({ name: 'KeepDetails', params: { keepId: props.keep.id } })
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.modalFade-enter-active,
.modalFade-leave-active {
  transition: opacity 0.25s ease;
}

.modalFade-enter-from,
.modalFade-leave-to {
  opacity: 0;
}

.keepContent {
  position: relative;
  width: 150px;
  margin: 0 1rem 1rem 0;
  display: inline-block;
  width: 100%;
  border-radius: 4px;
}

.keepImg {
  border-radius: 4px;
}

.keepInfo {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.25rem;
  z-index: 2;
  h5:hover {
    cursor: pointer;
  }
}

.userImg {
  height: 3rem;
}
</style>