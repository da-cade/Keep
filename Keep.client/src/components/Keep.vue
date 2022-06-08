<template>
  <div class="keepContent d-flex align-items-end">
    <img
      :src="keep.img"
      class="img-fluid keepImg selectable"
      @click="goToDetails"
      :alt="keep.name"
    />
    <div class="keepInfo d-flex w-100 justify-content-between align-items-end">
      <h5 id="cow" class="text-light ps-1" @click="goToDetails">
        {{ keep.name }}
      </h5>
      <img
        :src="keep.creator?.picture"
        class="userImg rounded-circle"
        @click.stop="goToProfile"
        alt="user image"
      />
    </div>
  </div>

  <Transition name="modalFade">
    <keep-alive>
      <Modal
        v-if="showModal"
        :id="'keepDetails-' + keep.id"
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
import { onMounted, ref, watchEffect } from "@vue/runtime-core"
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
    watchEffect(() => {
      if (route.params.keepId == props.keep.id) {
        showModal.value = true
      }
      if (route.params.keepId != props.keep.id) {
        showModal.value = false
        AppState.activeKeep = {};
      }
    })
    return {
      route,
      showModal,
      async goToDetails() {
        try {
          router.push({ name: (route.name == "Home" ? 'KeepDetails' : route.name == "ProfilePage" ? "ProfileKeepDetails" : "VaultKeepDetails"), params: { keepId: props.keep.id } })
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
.modalFade-enter-active,
.modalFade-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.modalFade-enter-from,
.modalFade-leave-to {
  opacity: 0;
}

.keepContent {
  -webkit-column-break-inside: avoid;
  position: relative;
  width: 150px;
  margin: 0 1rem 1rem 0;
  display: inline-block;
  width: 100%;
  border-radius: 4px;
  // box-shadow: 1.4px 2px 2.7px rgba(0, 0, 0, 0.075),
  //   11px 16px 19px rgba(0, 0, 0, 0.15);
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
  background-color: rgba(0 0 0 / 23%);
  box-shadow: 0px -9.2px 9.1px 0px rgba(0 0 0 / 17%),
    0px -22px 21.8px 0px rgba(0 0 0 / 8%);

  h5:hover {
    cursor: pointer;
  }
}

.userImg {
  height: 2.5rem;
}
</style>